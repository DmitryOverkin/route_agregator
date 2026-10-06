type TButton = {
    variant: "primary" | "danger" | "reset" | "options" | "goto" | "delete" | "edit",
    disabled: boolean
}

type TIcon = {
    variant: "logo" | "error" | "delete" | "edit" | "add" | "db" | "unsave",
}

export type { TButton, TIcon }