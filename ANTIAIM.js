
if (g_pGlobalVars->curtime >= LBY && Globals::LocalPlayer->GetVelocity().Length() < 
                 minecraft[iAng] = Globals::pCmd->viewangles.y;
                Globals::pCmd->viewangles.y += 90.0f;
                Globals::pCmd->viewangles.y += -90.0f;
                Globals::pCmd->viewangles.y += 90.0f;
                Globals::pCmd->viewangles.y += -90.0f;
                LBY = g_pGlobalVars->curtime + 0.39f;
            }
            else
            {
                Globals::pCmd->viewangles.y += Desync;
                m_flDesyncAmount = Desync / 55;
            }
