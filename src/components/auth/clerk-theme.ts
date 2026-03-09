import { dark } from "@clerk/themes";

export function getClerkAppearance(theme: "dark" | "light") {
  const isDark = theme === "dark";

  return {
    baseTheme: isDark ? dark : undefined,
    variables: {
      colorPrimary: "#F59E0B",
      colorBackground: isDark ? "#141416" : "#FFFFFF",
      colorText: isDark ? "#F5F5F7" : "#111827",
      colorTextSecondary: isDark ? "#A1A1AA" : "#6B7280",
      colorInputBackground: isDark ? "#1C1C1F" : "#FFFFFF",
      colorInputText: isDark ? "#F5F5F7" : "#111827",
      colorDanger: "#EF4444",
      colorSuccess: "#10B981",
      colorWarning: "#F59E0B",
      borderRadius: "0.75rem",
    },
    elements: {
      rootBox: "w-full",
      card: isDark
        ? "!bg-[#141416] !border !border-[#27272A] !shadow-xl !rounded-2xl"
        : "!bg-white !border !border-[#E5E7EB] !shadow-xl !rounded-2xl",
      headerTitle: isDark ? "!text-[#F5F5F7] !font-bold" : "!text-[#111827] !font-bold",
      headerSubtitle: isDark ? "!text-[#A1A1AA]" : "!text-[#6B7280]",
      socialButtonsBlockButton: isDark
        ? "!border !border-[#27272A] !bg-[#1C1C1F] !text-[#A1A1AA] hover:!bg-[#252529] transition-colors"
        : "!border !border-[#E5E7EB] !bg-white !text-[#4B5563] hover:!bg-[#F3F4F6] transition-colors",
      socialButtonsBlockButtonText: isDark ? "!text-[#A1A1AA]" : "!text-[#4B5563]",
      dividerLine: isDark ? "!bg-[#27272A]" : "!bg-[#E5E7EB]",
      dividerText: isDark ? "!text-[#71717A]" : "!text-[#6B7280]",
      formFieldLabel: isDark ? "!text-[#A1A1AA] !text-sm" : "!text-[#4B5563] !text-sm",
      formFieldInput: isDark
        ? "!bg-[#1C1C1F] !border-[#27272A] !text-[#F5F5F7] placeholder:!text-[#71717A] focus:!border-[#F59E0B] focus:!ring-[#F59E0B]"
        : "!bg-white !border-[#E5E7EB] !text-[#111827] placeholder:!text-[#6B7280] focus:!border-[#F59E0B] focus:!ring-[#F59E0B]",
      formButtonPrimary:
        "!bg-[#F59E0B] hover:!bg-[#D97706] !text-black !font-semibold !shadow-md",
      footerActionLink: "!text-[#F59E0B] hover:!text-[#D97706]",
      footerActionText: isDark ? "!text-[#71717A]" : "!text-[#6B7280]",
      identityPreviewText: isDark ? "!text-[#A1A1AA]" : "!text-[#4B5563]",
      identityPreviewEditButton: "!text-[#F59E0B]",
      formFieldSuccessText: "!text-emerald-500",
      formFieldErrorText: "!text-red-500",
      alertText: isDark ? "!text-red-400" : "!text-red-600",
      badge: isDark
        ? "!bg-[#F59E0B]/10 !text-[#F59E0B] !border-[#F59E0B]/20"
        : "!bg-[#F59E0B]/10 !text-[#B45309] !border-[#F59E0B]/20",
      modalBackdrop: "!bg-black/60 backdrop-blur-sm",
      modalContent: isDark
        ? "!bg-[#141416] !border !border-[#27272A]"
        : "!bg-white !border !border-[#E5E7EB]",
      otpCodeFieldInput: isDark
        ? "!bg-[#1C1C1F] !border-[#27272A] !text-[#F5F5F7]"
        : "!bg-white !border-[#E5E7EB] !text-[#111827]",
      userButtonPopoverCard: isDark
        ? "!bg-[#141416] !border !border-[#27272A]"
        : "!bg-white !border !border-[#E5E7EB]",
      userButtonPopoverActionButton: isDark
        ? "!text-[#A1A1AA] hover:!bg-[#252529] hover:!text-[#F5F5F7]"
        : "!text-[#4B5563] hover:!bg-[#F3F4F6] hover:!text-[#111827]",
      userButtonPopoverActionButtonText: isDark ? "!text-[#A1A1AA]" : "!text-[#4B5563]",
      userButtonPopoverFooter: isDark ? "!border-t !border-[#27272A]" : "!border-t !border-[#E5E7EB]",
      navbarButton: isDark
        ? "!text-[#A1A1AA] hover:!text-[#F5F5F7] hover:!bg-[#252529]"
        : "!text-[#4B5563] hover:!text-[#111827] hover:!bg-[#F3F4F6]",
      navbarButtonActive: "!text-[#F59E0B] !border-b-2 !border-[#F59E0B]",
    },
  };
}
