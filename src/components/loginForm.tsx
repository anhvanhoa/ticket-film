'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';

const formSchema = z.object({
    username: z.string().min(2).max(50)
});

const LoginForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: ''
        }
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                    <FormField
                        control={form.control}
                        name='username'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='Email' {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                    This is your public display Email.
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='username'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mật khẩu</FormLabel>
                                <FormControl>
                                    <Input placeholder='Mật khẩu' {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                    This is your public display Mật khẩu.
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        className='w-full bg-[#055398] hover:bg-[#055398]/90 !mt-8'
                        type='submit'
                    >
                        Đăng nhập
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default LoginForm;
