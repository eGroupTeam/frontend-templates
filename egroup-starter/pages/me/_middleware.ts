import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const hasLogin = req.cookies.hasLoginCookie;
  if (hasLogin) {
    return NextResponse.next();
  }
  return NextResponse.redirect("/");
}
