export default function ConfirmCopy({
  confirmCopy,
  text = "Email address copied 👍",
}) {
  return (
    <>
      {
        confirmCopy ?
          <p className="fixed top-4 bg-green-100 border-2 border-green-700 text-green-700 p-2 rounded-md animate-fade-out text-center">
            {text}
          </p>
          : null
      }
    </>
  );
};