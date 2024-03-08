function LoadingSpinner() {
  return (
    <div role="status" className="flex items-center justify-center">
      <svg
        aria-hidden="true"
        className="w-6 h-6 text-gray-300 animate-spin dark:text-gray-600 fill-white"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default LoadingSpinner;
