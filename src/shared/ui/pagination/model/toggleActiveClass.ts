type ToggleActiveClassProps = {
  buttons: NodeListOf<HTMLButtonElement> | null;
  initialPage: number | null;
  endPage: number;
  showMore: boolean;
};

export const toggleActiveClass = ({
  buttons,
  initialPage,
  endPage,
  showMore
}: ToggleActiveClassProps): void => {
  buttons?.forEach((button) => {
    const buttonValue = Number(button.textContent);
    const isSelected = initialPage !== null && buttonValue >= initialPage && buttonValue <= endPage;
    if (showMore && isSelected) {
      button.classList.add('Mui-selected');
    } else {
      if (buttonValue !== endPage) {
        button.classList.remove('Mui-selected');
      }
    }
  });
};
