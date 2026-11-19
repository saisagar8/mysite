export default function decorate(block) {
  block.setAttribute('role', 'list');
  [...block.children].forEach((row) => {
    row.setAttribute('role', 'listitem');
    const [value, label] = row.children;
    value.className = 'stats-value';
    label.className = 'stats-label';
  });
}