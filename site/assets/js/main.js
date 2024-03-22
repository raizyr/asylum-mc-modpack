document.querySelectorAll('.copy').forEach((copy) => {

  copy.addEventListener('click', function (e) {
    navigator.clipboard.writeText(this.dataset.copyText);
    this.dataset.tooltip = this.dataset.tooltipSuccess;
    this.dataset.tooltipConf = 'right success'
    setTimeout(() => {
      this.dataset.tooltip = this.dataset.tooltipInfo;
      this.dataset.tooltipConf = 'right info';
    }, 1500);
  });
});
