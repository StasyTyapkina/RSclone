// eslint-disable-next-line import/prefer-default-export
export function tooltip(event) {
  if (event.target.dataset.tooltip && event.type == 'mouseover') {
    const div = document.createElement('div');
    div.className = 'tooltip';
    div.innerHTML = event.target.dataset.tooltip;
    document.body.append(div);

    div.style.left = `${parseInt(event.target.getBoundingClientRect().left)}px`;
    div.style.top = `${parseInt(event.target.getBoundingClientRect().top) - parseInt(div.getBoundingClientRect().height)}px`;

    if (parseInt(div.style.top) < 0) {
      div.style.top = `${event.target.getBoundingClientRect().bottom}px`;
    }
  }

  if (event.target.dataset.tooltip && event.type == 'mouseout') {
    document.querySelector('.tooltip').remove();
  }
}
