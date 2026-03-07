import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-purple-300/20 blur-[120px]" />
      </div>

      <div className="mb-8 text-center">
        <a href="/" className="text-2xl font-black tracking-tight">
          <span className="gradient-text">SMU</span>
          <span className="text-gray-400 text-base font-normal ml-1">PRO</span>
        </a>
        <p className="mt-2 text-gray-500 text-sm">Bem-vindo de volta</p>
      </div>

      <SignIn
        appearance={{
          elements: {
            rootBox: "w-full",
            card: "bg-white border border-gray-200 shadow-sm rounded-2xl",
            headerTitle: "text-gray-900 font-bold",
            headerSubtitle: "text-gray-500",
            socialButtonsBlockButton: "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors",
            socialButtonsBlockButtonText: "text-gray-700",
            dividerLine: "bg-gray-200",
            dividerText: "text-gray-400",
            formFieldLabel: "text-gray-700 text-sm",
            formFieldInput: "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#6C3CE1]",
            formButtonPrimary: "bg-[#6C3CE1] hover:bg-[#5B30C5] text-white font-semibold",
            footerActionLink: "text-[#6C3CE1] hover:text-[#5B30C5]",
            identityPreviewText: "text-gray-700",
            identityPreviewEditButton: "text-[#6C3CE1]",
            formFieldSuccessText: "text-emerald-600",
            formFieldErrorText: "text-red-500",
            alertText: "text-red-500",
          },
          variables: {
            colorPrimary: "#6C3CE1",
            colorBackground: "#ffffff",
            colorText: "#111827",
            colorTextSecondary: "#6B7280",
            colorInputBackground: "#ffffff",
            colorInputText: "#111827",
            borderRadius: "0.75rem",
          },
        }}
        forceRedirectUrl="/dashboard"
        signUpUrl="/cadastro"
      />
    </div>
  );
}
