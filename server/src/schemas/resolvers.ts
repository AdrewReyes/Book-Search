import { AuthenticationError } from 'apollo-server-express';
import User from '../models/User.js';
import { signToken } from '../utils/auth.js';

interface Context {
  user?: {
    _id: string;
    username: string;
    email: string;
  };
}

const resolvers = {
  Query: {
    me: async (_parent: unknown, _args: unknown, context: Context) => {
      if (context.user) {
        return User.findById(context.user._id);
      }
      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
   // ...existing code...
login: async (
  _parent: unknown,
  { email, password }: { email: string; password: string }
) => {
  const user = await User.findOne({ email });
  if (!user) throw new AuthenticationError('Incorrect credentials');
  const correctPw = await user.isCorrectPassword(password);
  if (!correctPw) throw new AuthenticationError('Incorrect credentials');
  const token = signToken({
    username: user.username,
    email: user.email,
    _id: (user._id as string | { toString(): string }).toString(), // type assertion for safety
  });
  return { token, user };
},
addUser: async (
  _parent: unknown,
  args: { username: string; email: string; password: string }
) => {
  const user = await User.create(args) as typeof User.prototype & { _id: { toString(): string }, username: string, email: string };
  const token = signToken({
    username: user.username,
    email: user.email,
    _id: user._id.toString(),
  });
  return { token, user };
},
// ...existing code...
    saveBook: async (
      _parent: unknown,
      { bookData }: { bookData: any },
      context: Context
    ) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { $addToSet: { savedBooks: bookData } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    },
    removeBook: async (
      _parent: unknown,
      { bookId }: { bookId: string },
      context: Context
    ) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );
      return updatedUser;
    },
  },
};

export default resolvers;