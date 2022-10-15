export enum TypographyEnum {
    'default',
    'bold',
    'small',
    'logo',
}

export type TypographyType = keyof typeof TypographyEnum

export interface TypographyModel {
    type: TypographyType,
    color?: string,
}
