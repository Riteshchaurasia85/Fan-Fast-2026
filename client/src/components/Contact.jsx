import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import SectionHeading from './Common/SectionHeading';

const platformOptions = ['YouTube', 'Instagram', 'TikTok', 'Twitch', 'Podcast', 'X (Twitter)', 'Other'];
const interestOptions = ['Hosting a Panel or Talk', 'Meet & Greet Booth', 'Creator Collaborations', 'Brand Sponsorship Opportunities', 'Live Content Challenges'];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    handle: '',
    niche: '',
    platforms: [],
    followers: '',
    views: '',
    channelLink: '',
    socialLinks: '',
    interests: [],
    about: '',
    experience: '',
    source: '',
    terms: false,
    consent: false,
    updates: false,
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const inputClassName = (fieldName) =>
    `mt-2 w-full rounded-2xl border px-4 py-3 text-white outline-none ring-0 ${
      errors[fieldName] ? 'border-red-500 bg-[#09090B]' : 'border-white/10 bg-[#09090B]'
    }`;

  const sanitizeValue = (name, value) => {
    switch (name) {
      case 'name':
      case 'lastName':
      case 'country':
      case 'city':
        return value.replace(/[^A-Za-z\s.'-]/g, '');
      case 'phone':
        return value.replace(/\D/g, '').slice(0, 10);
      case 'handle':
        return value.replace(/[^A-Za-z0-9._-]/g, '');
      case 'niche':
        return value.replace(/[^A-Za-z0-9\s&,'().-]/g, '');
      case 'followers':
      case 'views':
        return value.replace(/[^0-9kKmM+]/g, '').slice(0, 15);
      default:
        return value;
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const nextValue = type === 'checkbox' ? checked : sanitizeValue(name, value);
    setForm((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleMultiSelect = (name, value) => {
    setForm((prev) => {
      const current = prev[name];
      return {
        ...prev,
        [name]: current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
      };
    });
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validateForm = () => {
    const nextErrors = {};
    const textOnlyPattern = /^[A-Za-z\s.'-]+$/;
    const handlePattern = /^[A-Za-z0-9._-]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
    const numberPattern = /^(\d+([kKmM])?)$/;

    if (!form.name.trim()) nextErrors.name = 'First name is required.';
    else if (!textOnlyPattern.test(form.name)) nextErrors.name = 'Only letters, spaces, hyphens, and apostrophes are allowed.';

    if (!form.lastName.trim()) nextErrors.lastName = 'Last name is required.';
    else if (!textOnlyPattern.test(form.lastName)) nextErrors.lastName = 'Only letters, spaces, hyphens, and apostrophes are allowed.';

    if (!form.email.trim()) nextErrors.email = 'Email address is required.';
    else if (!emailPattern.test(form.email)) nextErrors.email = 'Please enter a valid email address.';

    if (form.phone && !/^\d{10}$/.test(form.phone)) nextErrors.phone = 'Phone number must be exactly 10 digits.';

    if (!form.country.trim()) nextErrors.country = 'Country is required.';
    else if (!textOnlyPattern.test(form.country)) nextErrors.country = 'Only letters, spaces, hyphens, and apostrophes are allowed.';

    if (form.city && !textOnlyPattern.test(form.city)) nextErrors.city = 'Only letters, spaces, hyphens, and apostrophes are allowed.';

    if (!form.handle.trim()) nextErrors.handle = 'Creator handle is required.';
    else if (!handlePattern.test(form.handle)) nextErrors.handle = 'Use letters, numbers, dot, underscore, or hyphen only.';

    if (!form.niche.trim()) nextErrors.niche = 'Content niche is required.';
    else if (!/^[A-Za-z0-9\s&,'().-]+$/.test(form.niche)) nextErrors.niche = 'Only letters, numbers, spaces, and basic punctuation are allowed.';

    if (form.platforms.length === 0) nextErrors.platforms = 'Select at least one platform.';

    if (form.followers && !numberPattern.test(form.followers)) nextErrors.followers = 'Use numbers only, for example 100k or 50000.';
    if (form.views && !numberPattern.test(form.views)) nextErrors.views = 'Use numbers only, for example 20k or 50000.';

    if (!form.channelLink.trim()) nextErrors.channelLink = 'Channel link is required.';
    else if (!urlPattern.test(form.channelLink)) nextErrors.channelLink = 'Enter a valid URL.';

    if (!form.about.trim()) nextErrors.about = 'Please tell us about yourself.';
    if (!form.terms) nextErrors.terms = 'You must agree to the terms and conditions.';

    setErrors(nextErrors);
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setStatus('Please fix the highlighted fields before submitting.');
      return;
    }

    setStatus('Sending your application...');

    const payload = {
      ...form,
      message: `Name: ${form.name} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nCountry: ${form.country}\nCity: ${form.city}\nHandle: ${form.handle}\nNiche: ${form.niche}\nPlatforms: ${form.platforms.join(', ')}\nFollowers: ${form.followers}\nAverage views: ${form.views}\nChannel: ${form.channelLink}\nSocials: ${form.socialLinks}\nInterests: ${form.interests.join(', ')}\nAbout: ${form.about}\nExperience: ${form.experience}\nSource: ${form.source}`,
    };

    try {
      await axios.post('https://fan-fast.onrender.com/api/contact', payload);
      setStatus('Application sent successfully.');
      setForm({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        handle: '',
        niche: '',
        platforms: [],
        followers: '',
        views: '',
        channelLink: '',
        socialLinks: '',
        interests: [],
        about: '',
        experience: '',
        source: '',
        terms: false,
        consent: false,
        updates: false,
      });
      setErrors({});
    } catch (error) {
      setStatus(error.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <section id="apply" className="bg-[#09090B] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Apply as a Creator" title="Apply as a Creator" description="Fill in the form below and we'll review your application within 5–7 business days." />
        <motion.form initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} onSubmit={handleSubmit} className="mt-12 rounded-[2rem] border border-white/10 bg-[#111113] p-8 shadow-2xl shadow-black/20">
          <h3 className="text-xl font-semibold text-red-500">Personal Information</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <label className="text-sm text-slate-300">
              First Name *
              <input required name="name" value={form.name} onChange={handleChange} placeholder="e.g. Alex" className={inputClassName('name')} />
              {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
            </label>
            <label className="text-sm text-slate-300">
              Last Name *
              <input required name="lastName" value={form.lastName} onChange={handleChange} placeholder="e.g. Rivera" className={inputClassName('lastName')} />
              {errors.lastName && <p className="mt-2 text-xs text-red-400">{errors.lastName}</p>}
            </label>
            <label className="text-sm text-slate-300">
              Email Address *
              <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="hello@yoursite.com" className={inputClassName('email')} />
              {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
            </label>
            <label className="text-sm text-slate-300">
              Phone Number
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="9876543210" className={inputClassName('phone')} maxLength={10} inputMode="numeric" />
              {errors.phone && <p className="mt-2 text-xs text-red-400">{errors.phone}</p>}
            </label>
            <label className="text-sm text-slate-300">
              Country *
              <input required name="country" value={form.country} onChange={handleChange} placeholder="India" className={inputClassName('country')} />
              {errors.country && <p className="mt-2 text-xs text-red-400">{errors.country}</p>}
            </label>
            <label className="text-sm text-slate-300">
              City
              <input name="city" value={form.city} onChange={handleChange} placeholder="Mumbai" className={inputClassName('city')} />
              {errors.city && <p className="mt-2 text-xs text-red-400">{errors.city}</p>}
            </label>
          </div>

          <h3 className="mt-10 text-xl font-semibold text-red-500">Creator Profile</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <label className="text-sm text-slate-300">
              Primary Creator Handle / Name *
              <input required name="handle" value={form.handle} onChange={handleChange} placeholder="@yourname" className={inputClassName('handle')} />
              {errors.handle && <p className="mt-2 text-xs text-red-400">{errors.handle}</p>}
            </label>
            <label className="text-sm text-slate-300">
              Content Niche *
              <input required name="niche" value={form.niche} onChange={handleChange} placeholder="Gaming, Fashion, Tech..." className={inputClassName('niche')} />
              {errors.niche && <p className="mt-2 text-xs text-red-400">{errors.niche}</p>}
            </label>
            <label className="text-sm text-slate-300 md:col-span-2">
              Primary Platform(s) *
              <div className="mt-3 flex flex-wrap gap-3">
                {platformOptions.map((platform) => (
                  <button
                    type="button"
                    key={platform}
                    onClick={() => handleMultiSelect('platforms', platform)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      form.platforms.includes(platform)
                        ? 'border-fuchsia-500 bg-fuchsia-500/15 text-fuchsia-300'
                        : 'border-white/10 bg-slate-900 text-slate-300'
                    } ${errors.platforms ? 'border-red-500' : ''}`}
                  >
                    {platform}
                  </button>
                ))}
              </div>
              {errors.platforms && <p className="mt-2 text-xs text-red-400">{errors.platforms}</p>}
            </label>
            <label className="text-sm text-slate-300">
              Total Followers / Subscribers
              <input name="followers" value={form.followers} onChange={handleChange} placeholder="100k+" className={inputClassName('followers')} />
              {errors.followers && <p className="mt-2 text-xs text-red-400">{errors.followers}</p>}
            </label>
            <label className="text-sm text-slate-300">
              Average Views Per Post
              <input name="views" value={form.views} onChange={handleChange} placeholder="20k" className={inputClassName('views')} />
              {errors.views && <p className="mt-2 text-xs text-red-400">{errors.views}</p>}
            </label>
            <label className="text-sm text-slate-300">
              Primary Channel / Profile Link *
              <input required name="channelLink" value={form.channelLink} onChange={handleChange} placeholder="https://youtube.com/..." className={inputClassName('channelLink')} />
              {errors.channelLink && <p className="mt-2 text-xs text-red-400">{errors.channelLink}</p>}
            </label>
            <label className="text-sm text-slate-300">
              Other Social Media Links
              <input name="socialLinks" value={form.socialLinks} onChange={handleChange} placeholder="Instagram, TikTok, X..." className={inputClassName('socialLinks')} />
            </label>
          </div>

          <h3 className="mt-10 text-xl font-semibold text-red-500">Participation Preferences</h3>
          <div className="mt-6 space-y-6">
            <label className="text-sm text-slate-300">
              Interested in (select all that apply)
              <div className="mt-3 flex flex-wrap gap-3">
                {interestOptions.map((interest) => (
                  <button
                    type="button"
                    key={interest}
                    onClick={() => handleMultiSelect('interests', interest)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      form.interests.includes(interest)
                        ? 'border-fuchsia-500 bg-fuchsia-500/15 text-fuchsia-300'
                        : 'border-white/10 bg-[#09090B] text-slate-300'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </label>
            <label className="text-sm text-slate-300">
              Tell us about yourself & why you want to join *
              <textarea required name="about" value={form.about} onChange={handleChange} rows="5" placeholder="Share your story, audience, and what makes your content special." className={inputClassName('about')} />
              {errors.about && <p className="mt-2 text-xs text-red-400">{errors.about}</p>}
            </label>
            <label className="text-sm text-slate-300">
              Previous Event Experience
              <textarea name="experience" value={form.experience} onChange={handleChange} rows="4" placeholder="List any previous creator or event experience." className={inputClassName('experience')} />
            </label>
            <label className="text-sm text-slate-300">
              How did you hear about FanFest 2026?
              <input name="source" value={form.source} onChange={handleChange} placeholder="Social media, referral, newsletter..." className={inputClassName('source')} />
            </label>
          </div>

          <div className="mt-8 space-y-3 text-sm text-slate-400">
            <label className="flex items-start gap-3">
              <input type="checkbox" checked={form.terms} onChange={handleChange} name="terms" className="mt-1" />
              <span className="text-red-500">I agree to FanFest 2026's Terms & Conditions and Creator Code of Conduct.</span>
            </label>
            {errors.terms && <p className="ml-6 text-xs text-red-400">{errors.terms}</p>}
            <label className="flex items-start gap-3">
              <input type="checkbox" checked={form.consent} onChange={handleChange} name="consent" className="mt-1" />
              <span className="text-red-500">I consent to photos and videos of me being used in FanFest marketing materials.</span>
            </label>
            <label className="flex items-start gap-3">
              <input type="checkbox" checked={form.updates} onChange={handleChange} name="updates" className="mt-1" />
              <span className="text-red-500">Keep me updated with FanFest news and future opportunities.</span>
            </label>
          </div>

          <button type="submit" className="mt-8 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-500">
            Submit My Application →
          </button>
          {status && <p className={`mt-4 text-sm ${Object.keys(errors).length > 0 ? 'text-red-400' : 'text-slate-400'}`}>{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
