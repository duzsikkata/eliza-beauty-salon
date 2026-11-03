const menu=document.querySelector('.menu-toggle');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));document.querySelector('nav').classList.toggle('open',open);menu.setAttribute('aria-label',open?'Menü bezárása':'Menü megnyitása');});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');document.querySelector('nav').classList.remove('open');}});
document.querySelectorAll('form[data-kind="contact"]').forEach(form => form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity() || form.dataset.submitting === 'true') return;
  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector('.status');
  const originalLabel = button.innerHTML;
  form.dataset.submitting = 'true';
  form.setAttribute('aria-busy', 'true');
  button.disabled = true;
  button.textContent = 'Küldés folyamatban…';
  status.classList.remove('is-error');
  status.textContent = '';
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams(new FormData(form)).toString(),
      signal: AbortSignal.timeout(20000),
    });
    if (!response.ok) throw new Error('Submission failed');
    form.reset();
    status.textContent = 'Köszönöm! Az időpontkérésed sikeresen beérkezett. Az időpont az egyeztetés és visszaigazolás után válik véglegessé.';
  } catch {
    status.classList.add('is-error');
    status.textContent = 'Az elküldést nem sikerült megerősíteni. Az adataid megmaradtak az űrlapon. Ellenőrizd az internetkapcsolatot, és próbáld újra később.';
  } finally {
    delete form.dataset.submitting;
    form.removeAttribute('aria-busy');
    button.disabled = false;
    button.innerHTML = originalLabel;
    status.focus();
  }
}));
document.querySelectorAll('form[data-kind="newsletter"]').forEach(form => form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const body = `Név: ${data.get('name')}\nE-mail: ${data.get('email')}\n\nSzeretnék érdeklődni az Arcápolási Kisokos elérhetőségéről.`;
  location.href = `mailto:hello.elizabeauty@gmail.com?subject=${encodeURIComponent('Érdeklődés az Arcápolási Kisokosról')}&body=${encodeURIComponent(body)}`;
  form.querySelector('.status').textContent = 'A hírlevél még nem aktív. Az érdeklődő üzenetet a levelezőalkalmazásodban küldheted el.';
}));
document.querySelectorAll('.package .button').forEach(button=>button.addEventListener('click',()=>{const message=document.querySelector('#idopont textarea');message.value=`A következő csomag érdekel: ${button.closest('.package').querySelector('h3').textContent}. Szeretnék időpontot egyeztetni.`;}));
