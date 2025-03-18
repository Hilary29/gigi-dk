import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div>
      <div className="flex items-center justify-center  bg-white pt-8 sm:pt-16">
        <div className="flex flex-col items-center">
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
            className="text-primary-500 border-2 border-primary-500 rounded-lg p-2 hover:text-primary-600 hover:border-primary-600 font-medium"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
