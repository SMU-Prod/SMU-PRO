import { SignUp } from "@clerk/nextjs";

export default function CadastroPage() {
  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[120px]" />
      </div>

      <div className="mb-8 text-center">
        <a href="/" className="text-2xl font-black tracking-tight">
          <span className="gradient-text">SMU</span>
          <span className="text-zinc-500 text-base font-normal ml-1">PRO</span>
        </a>
        <p className="mt-2 text-zinc-500 text-sm">Crie sua conta profissional</p>
      </div>

      <SignUp
        appearance={{
          elements: {
            rootBox: "w-full",
            card: "bg-[#141416] border border-zinc-800 shadow-sm rounded-2xl",
            headerTitle: "text-zinc-100 font-bold",
            headerSubtitle: "text-zinc-500",
            socialButtonsBlockButton: "border border-zinc-800 bg-[#141416] text-zinc-300 hover:bg-zinc-800 transition-colors",
            socialButtonsBlockButtonText: "text-zinc-300",
            dividerLine: "bg-zinc-800",
            dividerText: "text-zinc-500",
            formFieldLabel: "text-zinc-300 text-sm",
            formFieldInput: "bg-[#141416] border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus:border-[#F59E0B]",
            formButtonPrimary: "bg-[#F59E0B] hover:bg-amber-600 text-white font-semibold",
            footerActionLink: "text-[#F59E0B] hover:text-amber-400",
            identityPreviewText: "text-zinc-300",
            identityPreviewEditButton: "text-[#F59E0B]",
            formFieldSuccessText: "text-emerald-600",
            formFieldErrorText: "text-red-500",
            alertText: "text-red-500",
          },
          variables: {
            colorPrimary: "#F59E0B",
            colorBackground: "#141416",
            colorText: "#f4f4f5",
            colorTextSecondary: "#71717a",
            colorInputBackground: "#141416",
            colorInputText: "#f4f4f5",
            borderRadius: "0.75rem",
          },
        }}
        forceRedirectUrl="/dashboard"
        signInUrl="/login"
      />
    </div>
  );
}
