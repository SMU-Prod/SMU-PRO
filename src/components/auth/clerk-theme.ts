const darkVars = {
  colorPrimary: "#F59E0B",
  colorBackground: "#141416",
  colorText: "#f4f4f5",
  colorTextSecondary: "#71717a",
  colorInputBackground: "#141416",
  colorInputText: "#f4f4f5",
  borderRadius: "0.75rem",
};

const lightVars = {
  colorPrimary: "#F59E0B",
  colorBackground: "#FFFFFF",
  colorText: "#111827",
  colorTextSecondary: "#6B7280",
  colorInputBackground: "#FFFFFF",
  colorInputText: "#111827",
  borderRadius: "0.75rem",
};

export function getClerkAppearance(theme: "dark" | "light") {
  const isDark = theme === "dark";
  return {
    elements: {
      rootBox: "w-full",
      card: isDark
        ? "bg-[#141416] border border-[#27272A] shadow-sm rounded-2xl"
        : "bg-white border border-[#E5E7EB] shadow-sm rounded-2xl",
      headerTitle: isDark ? "text-[#f4f4f5] font-bold" : "text-[#111827] font-bold",
      headerSubtitle: isDark ? "text-[#71717a]" : "text-[#6B7280]",
      socialButtonsBlockButton: isDark
        ? "border border-[#27272A] bg-[#141416] text-[#a1a1aa] hover:bg-[#27272A] transition-colors"
        : "border border-[#E5E7EB] bg-white text-[#4B5563] hover:bg-[#F3F4F6] transition-colors",
      socialButtonsBlockButtonText: isDark ? "text-[#a1a1aa]" : "text-[#4B5563]",
      dividerLine: isDark ? "bg-[#27272A]" : "bg-[#E5E7EB]",
      dividerText: isDark ? "text-[#71717a]" : "text-[#6B7280]",
      formFieldLabel: isDark ? "text-[#a1a1aa] text-sm" : "text-[#4B5563] text-sm",
      formFieldInput: isDark
        ? "bg-[#141416] border-[#27272A] text-[#f4f4f5] placeholder:text-[#71717a] focus:border-[#F59E0B]"
        : "bg-white border-[#E5E7EB] text-[#111827] placeholder:text-[#6B7280] focus:border-[#F59E0B]",
      formButtonPrimary: "bg-[#F59E0B] hover:bg-amber-600 text-white font-semibold",
      footerActionLink: "text-[#F59E0B] hover:text-amber-400",
      identityPreviewText: isDark ? "text-[#a1a1aa]" : "text-[#4B5563]",
      identityPreviewEditButton: "text-[#F59E0B]",
      formFieldSuccessText: "text-emerald-600",
      formFieldErrorText: "text-red-500",
      alertText: "text-red-500",
    },
    variables: isDark ? darkVars : lightVars,
  };
}
