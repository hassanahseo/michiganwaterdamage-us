const cities = ['detroit', 'grand-rapids', 'ann-arbor', 'lansing', 'warren', 'sterling-heights'];
const services = ['water-damage', 'mold-remediation', 'fire-damage', 'biohazard-cleanup', 'plumbing'];

const totalVariants = 12;

for (let c = 0; c < cities.length; c++) {
  const cityVariants = [];
  for (let s = 0; s < services.length; s++) {
    const v = (c * 5 + s * 3) % totalVariants;
    cityVariants.push(v);
  }
  console.log(cities[c], cityVariants);
}

console.log('--- by service across cities ---');
for (let s = 0; s < services.length; s++) {
  const serviceVariants = [];
  for (let c = 0; c < cities.length; c++) {
    const v = (c * 5 + s * 3) % totalVariants;
    serviceVariants.push(v);
  }
  console.log(services[s], serviceVariants);
}
