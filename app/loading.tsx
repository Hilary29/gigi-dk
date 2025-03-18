import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center bg-white pt-8 sm:pt-20">
      <div className="flex flex-col items-center gap-16">
        {/* Logo centré */}
        <Image
          src="/images/gigidknails.png" 
          alt="Paysikure Logo"
          width={250}
          height={150}
          className="animate-pulse"
        />
        {/* Animation de chargement */}
        <div className="mt-6 flex space-x-2">
          <span className="h-5 w-5 bg-secondary-500 rounded-full animate-bounce"></span>
          <span className="h-5 w-5 bg-primary-100 rounded-full animate-bounce delay-200"></span>
          <span className="h-5 w-5 bg-secondary-500rounded-full animate-bounce delay-400"></span>
        </div>
      </div>
    </div>
  );
}
