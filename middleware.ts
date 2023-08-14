import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    let token = request.cookies.get("token")?.value;
    const publicPath = request.nextUrl.pathname == "/api/auth/login" || request.nextUrl.pathname == "/api/auth/register";
    
    if (!publicPath && !token) {
        return NextResponse.redirect(new URL('/api/auth/login', request.nextUrl));
    }
    if (token && publicPath) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }
}

export const config = {
    matcher: ["/api/auth/:path*", "/"],
}