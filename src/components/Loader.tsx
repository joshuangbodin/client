export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div
        className="bg-white rounded-full p-3 loader-shadow"
        style={{ width: 70, height: 70 }}
      >
        <div className="w-full h-full flex items-center justify-center logo-pulse">
          <img
            src="/brand/logo.svg"
            className="w-10 h-10 logo-jitter"
            alt="Loading..."
          />
        </div>
      </div>
    </div>
  );
}
