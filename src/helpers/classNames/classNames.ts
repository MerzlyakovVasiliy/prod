type Mods = Record<string, boolean | string>

export default function classNames (cls: string, mods: Mods, additional: string[]): string {
return [
    cls,
    ...additional,
    Object.entries(mods)
        .filter(([key, value]) => Boolean(value))
        .map((classNames, value) => classNames)
]
    .join(' ')
}