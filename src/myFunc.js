export function draw(predict, ctx) {
  if (predict.length > 0) {
    predict.forEach(item => {
      const keyPoin = item.scaledMesh;
      for (let i = 0; i < keyPoin.length; i++) {
        const x = keyPoin[i][0];
        const y = keyPoin[i][1];
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, 3 * Math.PI);
        ctx.fillStyle = 'yellow';
        ctx.fill();
      }
    });
  }
}