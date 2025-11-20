import type { BuildOptions} from "./types";

export async function build(options: BuildOptions): Promise<void> {
    console.log(`Building ${options.input} -> ${options.output}`);
    // TODO: Implement build logic
}