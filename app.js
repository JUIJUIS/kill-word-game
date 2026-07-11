:root {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #1f2230;
  background: linear-gradient(135deg, #fff3e9, #f2eeff 55%, #eaf9ff);
  font-synthesis: none;
}
* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; }
button, input, select { font: inherit; }
button { cursor: pointer; border: 0; border-radius: 14px; padding: 13px 18px; font-weight: 800; background: #ececf3; color: #242638; }
button:hover { transform: translateY(-1px); }
button:disabled { opacity: .45; cursor: not-allowed; transform: none; }
input, select { width: 100%; border: 2px solid #e7e6ef; border-radius: 14px; padding: 13px 14px; outline: none; background: #fff; }
input:focus, select:focus { border-color: #6c55e0; box-shadow: 0 0 0 4px rgba(108, 85, 224, .12); }
label { display: block; font-weight: 750; margin-bottom: 8px; }
.app-shell { width: min(900px, calc(100% - 24px)); margin: 0 auto; padding: 28px 0 60px; }
.panel { background: rgba(255,255,255,.92); border: 1px solid rgba(255,255,255,.8); box-shadow: 0 18px 50px rgba(54, 43, 103, .12); border-radius: 24px; padding: 22px; margin-bottom: 18px; backdrop-filter: blur(12px); }
.hero { max-width: 520px; margin: 6vh auto 0; text-align: center; }
.hero label { text-align: left; margin-top: 24px; }
.logo { font-size: 48px; }
h1 { font-size: clamp(38px, 9vw, 66px); margin: 2px 0 8px; line-height: 1; }
h2 { margin: 0; }
.subtitle { color: #696b7b; line-height: 1.55; }
.eyebrow { margin: 0 0 4px; color: #6c55e0; text-transform: uppercase; letter-spacing: .08em; font-weight: 900; font-size: 12px; }
.primary { width: 100%; color: #fff; background: linear-gradient(135deg, #6c55e0, #9a52d7); margin-top: 12px; box-shadow: 0 10px 20px rgba(108,85,224,.24); }
.divider { display: flex; align-items: center; gap: 12px; color: #999aaa; margin: 18px 0; }
.divider::before, .divider::after { content: ''; height: 1px; flex: 1; background: #e4e3eb; }
.join-row { display: grid; grid-template-columns: 1fr auto; gap: 10px; }
.topbar { display: flex; justify-content: space-between; align-items: center; padding: 8px 4px 16px; }
.room-code { background: transparent; padding: 0; font-size: 30px; letter-spacing: .12em; color: #3e2dad; }
.timer-box { display: flex; align-items: center; gap: 8px; background: #202234; color: white; padding: 11px 15px; border-radius: 16px; font-size: 19px; }
.settings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; }
.section-title { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
.badge { background: #eeecff; color: #5f48d2; padding: 7px 10px; border-radius: 999px; font-weight: 800; font-size: 13px; white-space: nowrap; }
.badge.danger { background: #ffe8e8; color: #c8323e; }
.player-list { display: grid; gap: 10px; }
.player-row { display: flex; align-items: center; justify-content: space-between; padding: 13px 14px; border-radius: 16px; background: #f7f7fb; }
.player-main { display: flex; align-items: center; gap: 10px; }
.avatar { width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; background: #e6e1ff; font-weight: 900; }
.player-meta { color: #77798a; font-size: 13px; }
.game-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 13px; }
.game-card { border: 2px solid #ebe9f4; border-radius: 20px; padding: 18px; background: #fff; position: relative; overflow: hidden; }
.game-card.out { opacity: .55; filter: grayscale(.7); }
.game-card.self { background: repeating-linear-gradient(135deg, #26283a, #26283a 14px, #2e3045 14px, #2e3045 28px); color: #fff; border-color: #3b3e58; }
.word { font-size: 31px; font-weight: 950; margin: 14px 0 16px; word-break: break-word; }
.kill-btn { width: 100%; background: #ff4f59; color: #fff; }
.out-stamp { position: absolute; top: 12px; right: 12px; background: #2c2e3c; color: #fff; border-radius: 999px; padding: 5px 8px; font-size: 11px; font-weight: 900; }
.error { color: #d13946; min-height: 20px; margin-bottom: 0; }
.toast { position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%); background: #202234; color: #fff; padding: 13px 18px; border-radius: 14px; box-shadow: 0 14px 30px rgba(0,0,0,.24); max-width: calc(100% - 30px); text-align: center; z-index: 10; }
.hidden { display: none !important; }
@media (max-width: 560px) {
  .app-shell { padding-top: 14px; }
  .panel { border-radius: 19px; padding: 17px; }
  .settings-grid { grid-template-columns: 1fr; }
  .game-grid { grid-template-columns: 1fr; }
  .room-code { font-size: 25px; }
}
