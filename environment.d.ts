// biome-ignore-all lint/style/noNamespace: false
// biome-ignore-all lint/correctness/noUnusedVariables:false
namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string
    NEXT_PUBLIC_PUSHER_API_URL: string
    NEXT_PUBLIC_SITE_URL: string
  }
}
