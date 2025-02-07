import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware pour bloquer l'accès à certaines pages en production.
 * Actuellement, il :
 * 1. Interdit l'accès à `/dashboard` si l'environnement n'est pas "development".
 * 2. Redirige vers la page d'accueil (`/`) si la condition est remplie.
 *
 * @param {NextRequest} req - Requête HTTP entrante.
 * @returns {NextResponse} Réponse HTTP redirigeant ou passant au traitement suivant.
 */
export function secureDashboardMiddleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Bloque l'accès à /dashboard en production
  if (
    url.pathname.startsWith("/dashboard") &&
    process.env.NODE_ENV !== "development"
  ) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
