import type { Ref } from 'react';
import { type ComponentPropsWithRef, forwardRef } from 'react';

type InputProps = ComponentPropsWithRef<'input'> & {
  name: string;
  label: string;
  type?: string;
  error?: boolean;
};

export default forwardRef(function Input(
  { name, label, type, error, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div className="relative">
      <input
        ref={ref}
        id={name}
        name={name}
        className={`block w-full px-6 pt-6 pb-1 text-white rounded-md appearance-none text-md bg-neutral-700 focus:outline-none focus:ring-0 peer border ${
          error ? 'border-red-500' : 'border-neutral-700'
        }
          `}
        placeholder=" "
        type={type}
        {...rest}
      />
      <label
        htmlFor={name}
        className="absolute duration-150 transform scale-75 -translate-y-3 text-md text-zinc-400 top-4 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-focus:scale-75">
        {label}
      </label>
    </div>
  );
});
