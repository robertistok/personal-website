declare module "local-types" {
  export type GatsbyLocation = Location & {
    state?: {
      prevPath: string;
      [key: string]: string | number;
    };
  };
}
