export type BuildMode = 'development' | 'production';
export interface BuildPath {
    entry: string;
    output: string;
    html: string;
    src: string;
}

export interface BuildOption {
    mode: BuildMode;
    paths: BuildPath;
    isDev: boolean;
    port: number;
    apiUrl: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl?: string;
}
