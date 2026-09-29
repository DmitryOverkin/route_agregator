export const ButtonType = {
    Primary: 'primary',
    Delete: 'delete',
} as const;

export type ButtonType = (typeof ButtonType)[keyof typeof ButtonType];