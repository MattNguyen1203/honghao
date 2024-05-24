'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {format} from 'date-fns'

import {Button} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {Calendar} from '@/components/ui/calendar'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {useEffect, useState} from 'react'
import InformationForm from './InformationForm'

const data = {
  typeoftour: ['Best Budget', 'Standard', 'Premium'],
  choosedays: [
    {title: '4 days 3 night', day: 4},
    {title: '3 days 2 night', day: 3},
    {title: '2 days 1 night', day: 2},
  ],
  pickup: ['Hà Nội1', 'Hà Nội2', 'Hà Nội3'],
  droff: [
    {title: 'Hà Nội11', address: ['Hà Nội11131', 'Hà Nội11221', 'Hà Nội11233']},
    {
      title: 'Hà Nội12',
      address: ['Hà Nội121312', 'Hà Nội12221', 'Hà Nội13223'],
    },
    {
      title: 'Hà Nội13',
      address: ['Hà Nội131312', 'Hà Nội1323123', 'Hà Nội133123'],
    },
  ],
  paxValueSelf: 169,
  paxValueLocal: 199,
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z
    .string()
    .min(1, {message: 'Please enter your email!'})
    .email({message: 'Enter the correct email format!'}),
  phone: z
    .string()
    .min(1, {message: 'Please enter your phone number.'})
    .regex(
      /^(999|998|997|996|995|994|993|992|991|990|979|978|977|976|975|974|973|972|971|970|969|968|967|966|965|964|963|962|961|960|899|898|897|896|895|894|893|892|891|890|889|888|887|886|885|884|883|882|881|880|879|878|877|876|875|874|873|872|871|870|859|858|857|856|855|854|853|852|851|850|839|838|837|836|835|834|833|832|831|830|809|808|807|806|805|804|803|802|801|800|699|698|697|696|695|694|693|692|691|690|689|688|687|686|685|684|683|682|681|680|679|678|677|676|675|674|673|672|671|670|599|598|597|596|595|594|593|592|591|590|509|508|507|506|505|504|503|502|501|500|429|428|427|426|425|424|423|422|421|420|389|388|387|386|385|384|383|382|381|380|379|378|377|376|375|374|373|372|371|370|359|358|357|356|355|354|353|352|351|350|299|298|297|296|295|294|293|292|291|290|289|288|287|286|285|284|283|282|281|280|269|268|267|266|265|264|263|262|261|260|259|258|257|256|255|254|253|252|251|250|249|248|247|246|245|244|243|242|241|240|239|238|237|236|235|234|233|232|231|230|229|228|227|226|225|224|223|222|221|220|219|218|217|216|215|214|213|212|211|210|98|95|94|93|92|91|90|86|84|0|82|81|66|65|64|63|62|61|60|58|57|56|55|54|53|52|51|49|48|47|46|45|44|43|41|40|39|36|34|33|32|31|30|27|20|7|1)[0-9]{0,14}$/,
      {message: 'Invalid format!'},
    ),
  message: z.string().max(160, {
    message: 'Bio must not be longer than 30 characters.',
  }),

  typeoftour: z.string().min(1, 'Please fill out this field'),
  choosedays: z.string().min(1, 'Please fill out this field'),
  pickup: z.string().min(1, 'Please fill out this field'),
  droff: z.string().min(1, 'Please fill out this field'),
  dob: z.date({
    required_error: 'A date of birth is required.',
    message: 'Please fill out this field',
  }),
  address: z.string().min(1, 'Please fill out this field'),
  destination: z.string().min(1, 'Please fill out this field'),
  enddate: z.date({
    required_error: 'A date of birth is required.',
    message: 'Please fill out this field',
  }),
})

export default function HomeForm() {
  const [paxValueSelf, setPaxValueSelf] = useState(1)
  const [paxValueLocal, setPaxValueLocal] = useState(1)
  const [dataDestination, setDataDestination] = useState(1)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      typeoftour: '',
      choosedays: '',
      message: '',
      pickup: '',
      droff: '',
      dob: '',
      enddate: '',
      address: '',
      destination: '',
    },
  })
  const dataForm = form.watch()
  const [endDate, setEndDate] = useState(null)

  useEffect(() => {
    let startDate = dataForm?.dob
    let endDateUse = new Date(startDate)
    if (dataForm?.dob && dataForm?.choosedays) {
      const dayValue = data?.choosedays.find(
        (item) => item.title === dataForm?.choosedays,
      )
      endDateUse.setDate(startDate?.getDate() + dayValue?.day || 0)
      setEndDate(endDateUse)
      form.setValue('enddate', endDateUse)
    }
  }, [dataForm?.choosedays, dataForm?.dob])

  useEffect(() => {
    form.setValue('destination', '')
    const dataDestination = data?.droff.find(
      (item) => item.title === dataForm?.droff,
    )
    setDataDestination(dataDestination)
  }, [dataForm?.droff])

  async function postFile(newvalue) {
    try {
      const formdata = new FormData()

      formdata?.append('entry.335637933', newvalue?.username)
      formdata?.append('entry.1417657903', newvalue?.email)
      formdata?.append('entry.516066790', newvalue?.phone)
      formdata?.append('entry.513250024', newvalue?.typeoftour)
      formdata?.append('entry.531591585', newvalue?.choosedays)
      formdata?.append('entry.1318177335', newvalue?.message)
      formdata?.append('entry.596297400', newvalue?.pickup)
      formdata?.append('entry.737203426', newvalue?.droff)
      formdata?.append('entry.1683072828', newvalue?.dob)
      formdata?.append('entry.1967653042', newvalue?.enddate)
      formdata?.append('entry.571877462', newvalue?.address)
      formdata?.append('entry.1295571760', newvalue?.destination)
      formdata?.append('entry.954465883', paxValueLocal + paxValueSelf)
      console.log(formdata)
      await fetch(
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfqbLnJVPF8a7wRisEdbOUrpvDjwRIQN0_aMMY6-qgk_vKVFQ/formResponse',
        {
          method: 'POST',
          body: formdata,
          mode: 'no-cors',
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  function onSubmit(values) {
    const newvalue = {
      paxValueSelf: paxValueSelf,
      paxValueLocal: paxValueLocal,
      ...values,
    }
    console.log(newvalue)
    postFile(newvalue)
  }
  return (
    <section className='flex rounded-[1.5rem] w-fit relative'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-[0.75rem] bg-white w-[34.75rem] py-[1.5rem] pr-[0.75rem] pl-[1.5rem]'
        >
          <FormField
            control={form.control}
            name='username'
            render={({field}) => (
              <FormItem>
                <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                  Customer information:
                </FormLabel>
                <FormControl>
                  <Input
                    className='!h-[2.5rem] py-[0.75rem] px-[1rem] rounded-[0.5rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal bg-white focus-visible:ring-transparent'
                    autoComplete='off'
                    placeholder='Peter Nguyen Tuan Anh'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex w-full space-x-[0.75rem]'>
            <FormField
              control={form.control}
              name='phone'
              render={({field}) => (
                <FormItem className='flex-1'>
                  <FormControl>
                    <Input
                      className='!h-[2.5rem] py-[0.75rem] px-[1rem] rounded-[0.5rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal bg-white focus-visible:ring-transparent'
                      autoComplete='off'
                      placeholder='Phone (Whatsapp) *'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({field}) => (
                <FormItem className='flex-1'>
                  <FormControl>
                    <Input
                      className='!h-[2.5rem] py-[0.75rem] px-[1rem] rounded-[0.5rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal bg-white focus-visible:ring-transparent'
                      autoComplete='off'
                      placeholder='Email *'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='message'
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className='resize-none !h-[3.6875rem] !min-h-[3.6875rem] py-[0.75rem] px-[1rem] rounded-[0.5rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal bg-white focus-visible:ring-transparent'
                    placeholder='Message *'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex w-full space-x-[0.75rem]'>
            <FormField
              control={form.control}
              name='typeoftour'
              render={({field}) => (
                <FormItem className='flex-1'>
                  <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                    Type of tour:
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='border-[2px] border-solid focus:border-orange-normal border-greyscale-5 focus:ring-transparent'>
                        <SelectValue
                          className='placeholder:text-greyscale-10 placeholder:text-0875 flex-1'
                          placeholder='Choose type tour'
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='min-w-[16rem] p-[1.25rem] rounded-[0.75rem] sahdow-[90px_128px_44px_0px_rgba(66,72,66,0.00),57px_82px_40px_0px_rgba(66,72,66,0.01),32px_46px_34px_0px_rgba(66,72,66,0.05),14px_20px_25px_0px_rgba(66,72,66,0.09),4px_5px_14px_0px_rgba(66,72,66,0.10)]'>
                      {data?.typeoftour?.map((e, index) => (
                        <>
                          <SelectItem
                            key={index}
                            className='*:text-[1rem] *:font-bold *:text-greyscale-80'
                            value={e}
                          >
                            {e}
                          </SelectItem>
                          <hr className='last:hidden w-full h-[0.0625rem] my-[1.12rem] bg-[#f1f1f1]' />
                        </>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='choosedays'
              render={({field}) => (
                <FormItem className='flex-1'>
                  <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                    Choose days
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='border-[2px] border-solid focus:border-orange-normal border-greyscale-5 focus:ring-transparent'>
                        <SelectValue
                          className='text-greyscale-10 text-0875 flex-1'
                          placeholder='Choose day'
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='min-w-[16rem] p-[1.25rem] rounded-[0.75rem] sahdow-[90px_128px_44px_0px_rgba(66,72,66,0.00),57px_82px_40px_0px_rgba(66,72,66,0.01),32px_46px_34px_0px_rgba(66,72,66,0.05),14px_20px_25px_0px_rgba(66,72,66,0.09),4px_5px_14px_0px_rgba(66,72,66,0.10)]'>
                      {data?.choosedays?.map((e, index) => (
                        <>
                          <SelectItem
                            key={index}
                            className='*:text-[1rem] *:font-bold *:text-greyscale-80'
                            value={e?.title}
                          >
                            {e?.title}
                          </SelectItem>
                          <hr className='last:hidden w-full h-[0.0625rem] my-[1.12rem] bg-[#f1f1f1]' />
                        </>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex w-full space-x-[0.75rem]'>
            <div className='flex-1 flex space-x-[0.75rem]'>
              <FormField
                control={form.control}
                name='pickup'
                render={({field}) => (
                  <FormItem className='flex-1'>
                    <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                      Pick up
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className='border-[2px] border-solid focus:border-orange-normal border-greyscale-5 focus:ring-transparent'>
                          <SelectValue
                            className='text-greyscale-10 text-0875 flex-1'
                            placeholder='Hanoi'
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='min-w-[16rem] p-[1.25rem] rounded-[0.75rem] sahdow-[90px_128px_44px_0px_rgba(66,72,66,0.00),57px_82px_40px_0px_rgba(66,72,66,0.01),32px_46px_34px_0px_rgba(66,72,66,0.05),14px_20px_25px_0px_rgba(66,72,66,0.09),4px_5px_14px_0px_rgba(66,72,66,0.10)]'>
                        {data?.pickup?.map((e, index) => (
                          <>
                            <SelectItem
                              key={index}
                              className='*:text-[1rem] *:font-bold *:text-greyscale-80'
                              value={e}
                            >
                              {e}
                            </SelectItem>
                            <hr className='last:hidden w-full h-[0.0625rem] my-[1.12rem] bg-[#f1f1f1]' />
                          </>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='dob'
                render={({field}) => (
                  <FormItem className='!space-y-[0.4rem] flex flex-col justify-start flex-1 pt-[0.25rem]'>
                    <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                      Departure date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={`flex justify-center items-center !h-[2.5rem] space-x-[0.25rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal px-0 py-0 ${
                              !field?.value && 'text-muted-foreground'
                            }`}
                          >
                            {field?.value ? (
                              <span className='font-normal text-0875 text-greyscale-60 mr-[0.5rem]'>
                                {format(field.value, 'dd/M/yyyy')}
                              </span>
                            ) : (
                              <span className='font-normal text-0875 text-greyscale-60 mr-[0.5rem]'>
                                Pick a date
                              </span>
                            )}
                            <svg
                              className='w-[0.96294rem] h-[1rem]'
                              xmlns='http://www.w3.org/2000/svg'
                              width='16'
                              height='16'
                              viewBox='0 0 16 16'
                              fill='none'
                            >
                              <path
                                d='M2.41836 16.0001H13.5828C14.7532 16.0001 15.7043 15.049 15.7043 13.8786V3.30667C15.7043 2.1363 14.7532 1.18517 13.5828 1.18517H12.7413V0.592585C12.7413 0.266653 12.4746 0 12.1487 0C11.8228 0 11.5561 0.266653 11.5561 0.592585V1.18517H4.44504V0.592585C4.44504 0.266653 4.17834 0 3.85241 0C3.52648 0 3.25983 0.266653 3.25983 0.592585V1.18517H2.41836C1.24799 1.18517 0.296875 2.1363 0.296875 3.30667V13.8786C0.296875 15.049 1.24799 16.0001 2.41836 16.0001ZM1.48209 3.30667C1.48209 2.79113 1.90282 2.37039 2.41836 2.37039H3.25983V2.96298C3.25983 3.28891 3.52648 3.55556 3.85241 3.55556C4.17834 3.55556 4.445 3.28891 4.445 2.96298V2.37039H11.5561V2.96298C11.5561 3.28891 11.8228 3.55556 12.1487 3.55556C12.4746 3.55556 12.7413 3.28891 12.7413 2.96298V2.37039H13.5828C14.0983 2.37039 14.519 2.79113 14.519 3.30667V5.03707H1.48209V3.30667ZM1.48209 6.22224H14.5191V13.8786C14.5191 14.3941 14.0984 14.8149 13.5829 14.8149H2.41836C1.90282 14.8149 1.48209 14.3941 1.48209 13.8786V6.22224Z'
                                fill='#E64827'
                              />
                            </svg>
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        align='start'
                        className='w-auto p-0'
                      >
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date <= new Date().setHours(0, 0, 0, 0)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='address'
              render={({field}) => (
                <FormItem className='flex-1'>
                  <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                    Address *
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='!h-[2.5rem] py-[0.75rem] px-[1rem] rounded-[0.5rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal bg-white focus-visible:ring-transparent'
                      autoComplete='off'
                      placeholder='Address *'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex w-full space-x-[0.75rem]'>
            <div className='flex-1 flex space-x-[0.75rem]'>
              <FormField
                control={form.control}
                name='droff'
                render={({field}) => (
                  <FormItem className='flex-1'>
                    <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                      Droff
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className='border-[2px] border-solid focus:border-orange-normal border-greyscale-5 focus:ring-transparent'>
                          <SelectValue
                            className='text-greyscale-10 text-0875 flex-1'
                            placeholder='Hanoi'
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='min-w-[16rem] p-[1.25rem] rounded-[0.75rem] sahdow-[90px_128px_44px_0px_rgba(66,72,66,0.00),57px_82px_40px_0px_rgba(66,72,66,0.01),32px_46px_34px_0px_rgba(66,72,66,0.05),14px_20px_25px_0px_rgba(66,72,66,0.09),4px_5px_14px_0px_rgba(66,72,66,0.10)]'>
                        {data?.droff?.map((e, index) => (
                          <>
                            <SelectItem
                              key={index}
                              className='*:text-[1rem] *:font-bold *:text-greyscale-80'
                              value={e?.title}
                            >
                              {e?.title}
                            </SelectItem>
                            <hr className='last:hidden w-full h-[0.0625rem] my-[1.12rem] bg-[#f1f1f1]' />
                          </>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='enddate'
                render={({field}) => (
                  <FormItem className='!space-y-[0.4rem] flex flex-col justify-start flex-1 pt-[0.25rem]'>
                    <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                      End date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            disabled
                            variant={'outline'}
                            className={`flex justify-center items-center bg-greyscale-5 !h-[2.5rem] space-x-[0.25rem] border-[2px] border-solid border-greyscale-5 focus:border-orange-normal px-0 py-0 text-left font-normal text-0875 text-greyscale-60 ${
                              !field?.value && 'text-muted-foreground'
                            }`}
                          >
                            {dataForm?.dob && endDate ? (
                              <span className='text-center font-normal text-0875 text-greyscale-60 mr-[0.5rem]'>
                                {format(field.value, 'dd/M/yyyy')}
                              </span>
                            ) : dataForm?.choosedays ? (
                              <span className='text-center font-normal text-0875 text-greyscale-60 mr-[0.5rem]'>
                                Pick a date
                              </span>
                            ) : (
                              <span className='text-center font-normal text-0875 text-greyscale-60 mr-[0.5rem]'>
                                Pick Choose
                              </span>
                            )}
                            <svg
                              className='size-[1rem]'
                              xmlns='http://www.w3.org/2000/svg'
                              width='16'
                              height='16'
                              viewBox='0 0 16 16'
                              fill='none'
                            >
                              <path
                                d='M2.41836 16.0001H13.5828C14.7532 16.0001 15.7043 15.049 15.7043 13.8786V3.30667C15.7043 2.1363 14.7532 1.18517 13.5828 1.18517H12.7413V0.592585C12.7413 0.266653 12.4746 0 12.1487 0C11.8228 0 11.5561 0.266653 11.5561 0.592585V1.18517H4.44504V0.592585C4.44504 0.266653 4.17834 0 3.85241 0C3.52648 0 3.25983 0.266653 3.25983 0.592585V1.18517H2.41836C1.24799 1.18517 0.296875 2.1363 0.296875 3.30667V13.8786C0.296875 15.049 1.24799 16.0001 2.41836 16.0001ZM1.48209 3.30667C1.48209 2.79113 1.90282 2.37039 2.41836 2.37039H3.25983V2.96298C3.25983 3.28891 3.52648 3.55556 3.85241 3.55556C4.17834 3.55556 4.445 3.28891 4.445 2.96298V2.37039H11.5561V2.96298C11.5561 3.28891 11.8228 3.55556 12.1487 3.55556C12.4746 3.55556 12.7413 3.28891 12.7413 2.96298V2.37039H13.5828C14.0983 2.37039 14.519 2.79113 14.519 3.30667V5.03707H1.48209V3.30667ZM1.48209 6.22224H14.5191V13.8786C14.5191 14.3941 14.0984 14.8149 13.5829 14.8149H2.41836C1.90282 14.8149 1.48209 14.3941 1.48209 13.8786V6.22224Z'
                                fill='#3F3F3F'
                              />
                            </svg>
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='destination'
              render={({field}) => (
                <FormItem className='flex-1'>
                  <FormLabel className='text-0875 font-bold text-greyscale-80 mb-[0.5rem]'>
                    Address *
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='border-[2px] border-solid focus:border-orange-normal border-greyscale-5 focus:ring-transparent'>
                        <SelectValue
                          className='text-greyscale-10 text-0875 flex-1'
                          placeholder='Hanoi'
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='min-w-[16rem] p-[1.25rem] rounded-[0.75rem] sahdow-[90px_128px_44px_0px_rgba(66,72,66,0.00),57px_82px_40px_0px_rgba(66,72,66,0.01),32px_46px_34px_0px_rgba(66,72,66,0.05),14px_20px_25px_0px_rgba(66,72,66,0.09),4px_5px_14px_0px_rgba(66,72,66,0.10)]'>
                      {dataDestination &&
                        dataDestination?.address?.map((e, index) => (
                          <>
                            <SelectItem
                              key={index}
                              className='*:text-[1rem] *:font-bold *:text-greyscale-80'
                              value={e}
                            >
                              {e}
                            </SelectItem>
                            <hr className='w-full h-[0.0625rem] my-[1.12rem] bg-[#f1f1f1]' />
                          </>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex flex-col py-[0.75rem] rounded-[0.5rem] bg-white'>
            <div className='flex justify-between items-center'>
              <span className='text-0875 text-greyscale-60 font-normal'>
                4 days of self-driving
              </span>
              <div className='flex items-center'>
                <span className='w-[3.3125rem] text-0875 font-bold text-greyscale-40'>
                  {data?.paxValueSelf}
                </span>
                <div className='h-[1rem] w-[1px] bg-[#D9D9D9] mx-[0.5rem]'></div>
                <div className='flex items-center py-[0.375rem] px-[0.75rem] rounded-[0.25rem] bg-greyscale-5'>
                  <span className='text-0875 text-greyscale-60'>Pax</span>
                  <span className='w-[1.25rem] text-0875 font-bold text-right text-orange-normal-hover'>
                    {paxValueSelf}
                  </span>
                  <div className='flex flex-col'>
                    <div
                      onClick={() => {
                        setPaxValueSelf(paxValueSelf + 1)
                      }}
                      className=''
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        height='8'
                        viewBox='0 0 12 8'
                        fill='none'
                      >
                        <path
                          d='M6.00329 3.41525L2.38713 7.03125C2.20358 7.21498 1.97909 7.30664 1.71368 7.30664C1.4483 7.30664 1.22392 7.21496 1.04039 7.03125L0.482264 6.47331C0.298793 6.28986 0.207031 6.06534 0.207031 5.80004C0.207031 5.53474 0.298793 5.31032 0.482264 5.12659L5.32612 0.275364C5.50967 0.0917881 5.73413 2.41597e-07 5.99957 2.532e-07C6.265 2.64802e-07 6.48928 0.091762 6.67291 0.275364L11.5168 5.12656C11.7003 5.3103 11.7921 5.53468 11.7921 5.80001C11.7921 6.06534 11.7003 6.28984 11.5168 6.47328L10.9587 7.03123C10.7753 7.21496 10.5521 7.30662 10.289 7.30662C10.0262 7.30662 9.8005 7.21493 9.61202 7.03123L6.00329 3.41525Z'
                          fill='#727272'
                        />
                      </svg>
                    </div>
                    <div
                      onClick={() => {
                        if (paxValueSelf === 0) {
                          return
                        } else {
                          setPaxValueSelf(paxValueSelf - 1)
                        }
                      }}
                      className=''
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        height='8'
                        viewBox='0 0 12 8'
                        fill='none'
                      >
                        <path
                          d='M6.00329 4.19803L2.38713 0.58203C2.20358 0.398298 1.97909 0.306641 1.71368 0.306641C1.4483 0.306641 1.22392 0.398324 1.04039 0.58203L0.482264 1.13998C0.298793 1.32342 0.207031 1.54794 0.207031 1.81324C0.207031 2.07855 0.298793 2.30296 0.482264 2.48669L5.32612 7.33792C5.50967 7.52149 5.73413 7.61328 5.99957 7.61328C6.265 7.61328 6.48928 7.52152 6.67291 7.33792L11.5168 2.48672C11.7003 2.30298 11.7921 2.0786 11.7921 1.81327C11.7921 1.54794 11.7003 1.32345 11.5168 1.14L10.9587 0.582056C10.7753 0.398324 10.5521 0.306666 10.289 0.306666C10.0262 0.306666 9.8005 0.39835 9.61202 0.582056L6.00329 4.19803Z'
                          fill='#727272'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className='h-[0.0625rem] w-[32.5rem] my-[0.75rem]' />
            <div className='flex justify-between items-center'>
              <span className='text-0875 text-greyscale-60 font-normal'>
                4 days with local driver
              </span>
              <div className='flex items-center'>
                <span className='w-[3.3125rem] text-0875 font-bold text-greyscale-40'>
                  {data?.paxValueLocal}
                </span>
                <div className='h-[1rem] w-[1px] bg-[#D9D9D9] mx-[0.5rem]'></div>
                <div className='flex items-center py-[0.375rem] px-[0.75rem] rounded-[0.25rem] bg-greyscale-5'>
                  <span className='text-0875 text-greyscale-60'>Pax</span>
                  <span className='w-[1.25rem] text-0875 font-bold text-right text-orange-normal-hover'>
                    {paxValueLocal}
                  </span>
                  <div className='flex flex-col'>
                    <div
                      onClick={() => {
                        setPaxValueLocal(paxValueLocal + 1)
                      }}
                      className=''
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        height='8'
                        viewBox='0 0 12 8'
                        fill='none'
                      >
                        <path
                          d='M6.00329 3.41525L2.38713 7.03125C2.20358 7.21498 1.97909 7.30664 1.71368 7.30664C1.4483 7.30664 1.22392 7.21496 1.04039 7.03125L0.482264 6.47331C0.298793 6.28986 0.207031 6.06534 0.207031 5.80004C0.207031 5.53474 0.298793 5.31032 0.482264 5.12659L5.32612 0.275364C5.50967 0.0917881 5.73413 2.41597e-07 5.99957 2.532e-07C6.265 2.64802e-07 6.48928 0.091762 6.67291 0.275364L11.5168 5.12656C11.7003 5.3103 11.7921 5.53468 11.7921 5.80001C11.7921 6.06534 11.7003 6.28984 11.5168 6.47328L10.9587 7.03123C10.7753 7.21496 10.5521 7.30662 10.289 7.30662C10.0262 7.30662 9.8005 7.21493 9.61202 7.03123L6.00329 3.41525Z'
                          fill='#727272'
                        />
                      </svg>
                    </div>
                    <div
                      onClick={() => {
                        if (paxValueLocal === 0) {
                          return
                        } else {
                          setPaxValueLocal(paxValueLocal - 1)
                        }
                      }}
                      className=''
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        height='8'
                        viewBox='0 0 12 8'
                        fill='none'
                      >
                        <path
                          d='M6.00329 4.19803L2.38713 0.58203C2.20358 0.398298 1.97909 0.306641 1.71368 0.306641C1.4483 0.306641 1.22392 0.398324 1.04039 0.58203L0.482264 1.13998C0.298793 1.32342 0.207031 1.54794 0.207031 1.81324C0.207031 2.07855 0.298793 2.30296 0.482264 2.48669L5.32612 7.33792C5.50967 7.52149 5.73413 7.61328 5.99957 7.61328C6.265 7.61328 6.48928 7.52152 6.67291 7.33792L11.5168 2.48672C11.7003 2.30298 11.7921 2.0786 11.7921 1.81327C11.7921 1.54794 11.7003 1.32345 11.5168 1.14L10.9587 0.582056C10.7753 0.398324 10.5521 0.306666 10.289 0.306666C10.0262 0.306666 9.8005 0.39835 9.61202 0.582056L6.00329 4.19803Z'
                          fill='#727272'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className='h-[0.0625rem] w-[32.5rem] my-[0.75rem]' />
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-1 font-semibold text-[#551D0A]'>TOTAL</span>
            <span className='w-[10.5625rem] py-[0.25rem] px-[0.5rem] rounded-[0.25rem] bg-greyscale-5 flex justify-center items-center text-125 font-bold text-greyscale-80'>
              $
              {paxValueSelf * data?.paxValueSelf +
                paxValueLocal * data?.paxValueLocal}
            </span>
          </div>
          <div className='absolute bottom-[1.5rem] right-[1.75rem] w-[33.25rem] flex space-x-[0.5rem]'>
            <Button
              className='hover:bg-orange-normal-hover text-0875 font-extrabold text-white uppercase h-[3.5rem] py-[1rem] px-[2rem] flex-1 flex justify-center items-center rounded-[0.5rem] border-[1px] border-solid border-orange-normal-hover bg-orange-normal'
              type='submit'
            >
              BOOK NOW, Pay later
              <svg
                className='ml-[0.5rem]'
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
              >
                <path
                  d='M10.125 6H0'
                  stroke='url(#paint0_linear_9604_2828)'
                  strokeWidth='2'
                />
                <g filter='url(#filter0_i_9604_2828)'>
                  <path
                    d='M12 6L6 11.25L8.41379 6L6 0.75L12 6Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_i_9604_2828'
                    x='6'
                    y='0.75'
                    width='26'
                    height='14.5'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                  >
                    <feFlood
                      floodOpacity='0'
                      result='BackgroundImageFix'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='BackgroundImageFix'
                      result='shape'
                    />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset
                      dx='20'
                      dy='4'
                    />
                    <feGaussianBlur stdDeviation='50' />
                    <feComposite
                      in2='hardAlpha'
                      operator='arithmetic'
                      k2='-1'
                      k3='1'
                    />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='shape'
                      result='effect1_innerShadow_9604_2828'
                    />
                  </filter>
                  <linearGradient
                    id='paint0_linear_9604_2828'
                    x1='4.53912'
                    y1='6'
                    x2='4.53912'
                    y2='6.892'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop
                      offset='0.31'
                      stopColor='white'
                    />
                    <stop
                      offset='1'
                      stopColor='white'
                      stopOpacity='0'
                    />
                  </linearGradient>
                </defs>
              </svg>
            </Button>
            <Button
              className='hover:bg-orange-normal-hover hover:text-white text-0875 font-extrabold uppercase bg-white text-orange-normal-hover h-[3.5rem] py-[1rem] px-[2rem] flex-1 flex justify-center items-center rounded-[0.5rem] border-[1px] border-solid border-orange-normal-hover'
              type='submit'
            >
              PAY NOW
            </Button>
          </div>
        </form>
      </Form>
      <InformationForm
        dataForm={dataForm}
        data={data}
        paxValueSelf={paxValueSelf}
        paxValueLocal={paxValueLocal}
      />
    </section>
  )
}
