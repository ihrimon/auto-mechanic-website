
const SignIn = () => {
  

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-700">Sign In</h2>

          {/* Sign-in Form */}
          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center justify-center">
            <hr className="w-full border-gray-300" />
            <span className="px-4 text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Google Sign-in Button */}
          <button>Google Login</button>

          {/* Footer */}
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>

  );
};

export default SignIn;
