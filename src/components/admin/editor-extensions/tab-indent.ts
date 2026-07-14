import { Extension } from "@tiptap/react";

// 4 espaços não-quebráveis = recuo de parágrafo visível (espaços normais colapsam no HTML)
const TAB_SPACES = "    ";

// Custom Tab indent extension — must be a proper Extension to capture Tab key
export const TabIndent = Extension.create({
  name: "tabIndent",
  addKeyboardShortcuts() {
    return {
      Tab: ({ editor }) => {
        // Inside a list → indent the item
        if (editor.isActive("listItem")) {
          return editor.chain().sinkListItem("listItem").run();
        }
        // Otherwise → insert tab spaces (paragraph indent)
        // Returning true prevents Tab from moving focus to next page element
        editor.chain().insertContent(TAB_SPACES).run();
        return true;
      },
      "Shift-Tab": ({ editor }) => {
        if (editor.isActive("listItem")) {
          return editor.chain().liftListItem("listItem").run();
        }
        // Return true to prevent Shift+Tab from moving focus out
        return true;
      },
    };
  },
});
