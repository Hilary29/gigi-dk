import Link from "next/link";

function NotFoundPage() {
  return (
    <>
      <div className="min-h-full px-4 py-4  sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
        <div className="flex mt-6">
                <div className="h-screen">
                <div className="flex mt-10 ">
                  <Link
                    href="/"
                    className="inline-flex items-center px-2 py-2.5 text-sm sm:text-md font-medium text-white bg-rose-800 border border-transparent rounded-md shadow-sm hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                  >
                    Go back home
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
