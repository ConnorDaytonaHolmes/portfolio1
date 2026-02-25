export const config = {
    // match all paths except Azure Static Web App validation (starting with .swa)
    matcher: [
        '/((?!.swa).*)'
    ],
}