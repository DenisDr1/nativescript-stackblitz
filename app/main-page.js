import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function onCalculateButtonTapTask1(args) {
  const page = args.object.page;
  page.bindingContext.onCalculateButtonTapTask1();
}

export function onCalculateButtonTapTask2(args) {
  const page = args.object.page;
  page.bindingContext.onCalculateButtonTapTask2();
}
