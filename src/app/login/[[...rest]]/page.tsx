import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surface-2 flex flex-col items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[120px]" />
      </div>

      <div className="mb-8 text-center">
        <a href="/" className="text-2xl font-black tracking-tight">
          <span className="gradient-text">SMU</span>
          <span className="text-muted-light text-base font-normal ml-1">PRO</span>
        </a>
        <p className="mt-2 text-muted-light text-sm">Bem-vindo de volta</p>
      </div>

      <SignIn
        appearance={{
          elements: {
            rootBox: "w-full",
            card: "bg-surface border border-border shadow-sm rounded-2xl",
            headerTitle: "text-foreground font-bold",
            headerSubtitle: "text-muted-light",
            socialButtonsBlockButton: "border border-border bg-surface text-muted hover:bg-hover transition-colors",
            socialButtonsBlockButtonText: "text-muted",
            dividerLine: "bg-border",
            dividerText: "text-muted-light",
            formFieldLabel: "text-muted text-sm",
            formFieldInput: "bg-surface border-border text-foreground placeholder:text-muted-light focus:border-[#F59E0B]",
            formButtonPrimary: "bg-[#F59E0B] hover:bg-amber-600 text-white font-semibold",
            footerActionLink: "text-[#F59E0B] hover:text-amber-400",
            identityPreviewText: "text-muted",
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
        signUpUrl="/cadastro"
      />
    </div>
  );
}
