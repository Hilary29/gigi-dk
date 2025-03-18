import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div>
      <div className="flex items-center justify-center  bg-white pt-8 sm:pt-20">
        <div className="flex flex-col items-center gap-4">
          {/* Logo centré */}
          <Image
            src="/images/gigidknails.png"
            alt="Paysikure Logo"
            width={250}
            height={150}
          />
          <div>
            <p className="py-8 font-semibold text-xl">Page not Found</p>
          </div>
          <Link
            href="/"
            className="bg-primary-500 border-2 text-white rounded-lg p-2 hover:bg-primary-600 font-medium"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
