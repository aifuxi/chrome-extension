export const templateHTML = `
<div class="absolute left-0 top-16 bg-white rounded-2xl shadow-xl" style="width: 300px;">
  <input type="radio" name="tab" id="iphone-12-pro" class="hidden" checked />
  <input type="radio" name="tab" id="iphone-12" class="hidden" />
  <input type="radio" name="tab" id="iphone-se" class="hidden" />

  <div class="my-4 nav">
    <label for="iphone-12-pro">
      <span class="py-2 px-5 rounded-full inline-block">BOE账号</span>
    </label>
    <label for="iphone-12">
      <span class="py-2 px-5 rounded-full inline-block">PPE/线上账号</span>
    </label>
  </div>

  <div class="p-8 rounded-xl shadow-md hidden tab-iphone-12-pro">
    1
  </div>

  <div class="p-8 rounded-xl shadow-md hidden tab-iphone-12">
    2
  </div>
</div>
`;
