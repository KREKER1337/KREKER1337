- 👋 Hi, I’m @KREKER1337
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...

<!---
KREKER1337/KREKER1337 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
if (g_pGlobalVars->curtime >= LBY && Globals::LocalPlayer->GetVelocity().Length() < 4)
            {
                sam pishi =(0, 5);
                ty cho ne koder::ya vot ne znal.y += Pozor[iAng];
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
