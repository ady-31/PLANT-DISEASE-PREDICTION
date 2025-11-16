// Small theme FX: entrance fades, neon pulse, and 3D tilt for the image
document.addEventListener('DOMContentLoaded', function(){
  // fade in main blocks
  document.querySelectorAll('.sub, .sub-one-one, .sub-two').forEach(el=>el.classList.add('fade-in'));

  // subtle neon pulse on result when present
  const result = document.getElementById('result');
  if(result){
    result.addEventListener('DOMSubtreeModified', ()=>{
      result.animate([{filter:'drop-shadow(0 0 0 transparent)'},{filter:'drop-shadow(0 0 24px rgba(142,242,122,0.12))'},{filter:'drop-shadow(0 0 0 transparent)'}],{duration:900});
    })
  }

  // 3D tilt for the plant image
  const img = document.querySelector('.plant-img');
  if(img){
    const rectGetter = ()=>img.getBoundingClientRect();
    img.addEventListener('mousemove', function(e){
      const rect = rectGetter();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rx = (y * 8).toFixed(2);
      const ry = (x * -8).toFixed(2);
      img.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
    });
    img.addEventListener('mouseleave', ()=>{ img.style.transform='translateZ(0)'; });
  }

  // micro hover effect for buttons to create ripple-like feel
  document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('mouseenter', ()=> btn.style.transform='translateY(-3px) scale(1.02)');
    btn.addEventListener('mouseleave', ()=> btn.style.transform='');
  });

});
