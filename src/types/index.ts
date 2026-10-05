type TButton = {
    variant: "primary" | "danger" | "reset" | "options" | "goto",
    disabled: boolean
}

type TIcon = {
    variant: "logo" | "error" | "delete" | "edit" | "add" | "db" | "unsave",
}

export type { TButton, TIcon }