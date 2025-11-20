export interface BuildOptions {
    input: string;
    output: string;
    clean?: boolean;
}

export interface ParsedFile {
    path: string;
    content: string;
    title: string;
    html: string;
}