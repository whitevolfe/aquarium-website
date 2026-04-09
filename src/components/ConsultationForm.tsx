import { useState } from 'react';
import { toast } from 'sonner';

const ConsultationForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error('Please fill in your name and phone number.');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 26c0c484-0f08-44f4-9b53-85677e50cfd5',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
          subject: 'New Consultation Request from Aqua Reef Aquarium',
        }),
      });

      if (response.status === 200) {
        toast.success("Thank you! We'll contact you shortly.");
        setForm({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-8 max-w-md w-full'>
        <h3 className='font-display text-2xl font-bold text-foreground mb-6'>
          Request a Callback
        </h3>
        <form onSubmit={handleSubmit}>
          <div className='space-y-4'>
            <div>
              <label className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block font-body'>
                Name *
              </label>
              <input
                type='text'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className='w-full border border-border bg-background rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-amber transition-colors font-body'
                placeholder='Your name'
                maxLength={100}
              />
            </div>
            <div>
              <label className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block font-body'>
                Phone *
              </label>
              <input
                type='tel'
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className='w-full border border-border bg-background rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-amber transition-colors font-body'
                placeholder='+94 77 XXX XXXX'
                maxLength={20}
              />
            </div>
            <div>
              <label className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block font-body'>
                Email
              </label>
              <input
                type='email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className='w-full border border-border bg-background rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-amber transition-colors font-body'
                placeholder='your@email.com'
                maxLength={255}
              />
            </div>
            <div>
              <label className='text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block font-body'>
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className='w-full border border-border bg-background rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-amber transition-colors resize-none font-body'
                placeholder='Tell us about your project...'
                maxLength={1000}
              />
            </div>
            <div className='flex gap-3'>
              <button type='submit' className='btn-amber w-full gap-2'>
                <span className='w-4 h-4' /> Send Enquiry
              </button>
              <button
                type='button'
                onClick={() =>
                  document.getElementById('consultation-form')?.remove()
                }
                className='btn-outline-light w-full gap-2'
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
