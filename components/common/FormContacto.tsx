'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const contactSchema = z.object({
  nombres: z.string().min(1, 'El nombre es obligatorio'),
  apellidos: z.string().min(1, 'El apellido es obligatorio'),
  email: z.string().min(1, 'El email es obligatorio').email('El email no es válido'),
  telefono: z.string().min(1, 'El teléfono es obligatorio'),
  mensaje: z.string().min(1, 'El mensaje es obligatorio'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function FormContacto() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombres: '',
      apellidos: '',
      email: '',
      telefono: '',
      mensaje: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await emailjs.send('service_r9dtv8h', 'template_dftq1ws', data, 'user_4q0v1x2r7X8Z5j3J6Y9e5');
      reset();
      toast.success('Mensaje enviado correctamente');
    } catch {
      toast.error('Error al enviar el mensaje');
    }
  };

  return (
    <div>
      <h2 className="font-display text-3xl">Envíanos un mensaje</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="nombres">Nombres</Label>
            <Input id="nombres" {...register('nombres')} />
            {errors.nombres && <p className="text-xs text-destructive">{errors.nombres.message}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="apellidos">Apellidos</Label>
            <Input id="apellidos" {...register('apellidos')} />
            {errors.apellidos && (
              <p className="text-xs text-destructive">{errors.apellidos.message}</p>
            )}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register('email')} />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="telefono">Teléfono o celular</Label>
            <Input id="telefono" type="tel" {...register('telefono')} />
            {errors.telefono && (
              <p className="text-xs text-destructive">{errors.telefono.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="mensaje">Mensaje</Label>
          <Textarea id="mensaje" rows={6} {...register('mensaje')} />
          {errors.mensaje && <p className="text-xs text-destructive">{errors.mensaje.message}</p>}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? 'Enviando…' : 'Enviar'}
        </Button>
      </form>
    </div>
  );
}
