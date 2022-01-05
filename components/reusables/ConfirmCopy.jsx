export default function ConfirmCopy({ confirmCopy }) {
  return (
    <>
      {
        confirmCopy ?
          <p className="fixed top-4 bg-green-100 border-2 border-green-700 text-green-700 p-2 rounded-md animate-fade-out text-center">
            Email address copied 👍
          </p>
          : null
      }
    </>
  );
};