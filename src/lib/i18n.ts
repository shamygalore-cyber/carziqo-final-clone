export type LangCode = 'en' | 'fil' | 'es' | 'zh' | 'hi' | 'ar' | 'pt' | 'fr' | 'de' | 'ja' | 'ko' | 'ru' | 'id' | 'vi' | 'th' | 'ms' | 'tr' | 'it' | 'nl';

export const LANGUAGES: { code: LangCode; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fil', label: 'Filipino', flag: '🇵🇭' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { code: 'ms', label: 'Melayu', flag: '🇲🇾' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
];

type Dict = Record<string, string>;

const en: Dict = {
  // Auth
  'auth.welcomeBack': 'Welcome back',
  'auth.createAccount': 'Create your account',
  'auth.signInToManage': 'Sign in to manage your investments',
  'auth.startEarning': 'Start earning daily returns today',
  'auth.signIn': 'Sign In',
  'auth.register': 'Register',
  'auth.fullName': 'Full Name',
  'auth.phoneNumber': 'Phone Number',
  'auth.referralCode': 'Referral Code (Optional)',
  'auth.enterReferralCode': 'Enter referral code',
  'auth.email': 'Email',
  'auth.password': 'Password',
  'auth.pleaseWait': 'Please wait...',
  'auth.createAccountBtn': 'Create Account',
  'auth.termsNotice': 'By continuing, you agree to our Terms of Service and Privacy Policy.',
  'auth.downloadApp': 'Download Our App',
  'auth.aboutCarziqo': 'About Carziqo.Ltd',
  'auth.investPremium': 'Invest in premium cars.',
  'auth.earnDaily': 'Earn daily returns.',
  'auth.rentLuxury': 'Rent luxury vehicles, earn daily profits over 30 or 60 day holding periods.',
  'auth.upToDaily': 'Up to 5% daily returns',
  'auth.competitiveRates': 'Competitive rates on premium car rentals',
  'auth.flexibleWithdrawal': 'Flexible withdrawal',
  'auth.cashOut': 'Cash out your earnings anytime',
  'auth.secureTransactions': 'Secure transactions',
  'auth.adminVerified': 'Admin-verified payments and payouts',
  'auth.carRentalPlatform': 'Car Rental Earning Platform',
  'auth.passwordMinLength': 'Password must be at least 6 characters',
  'auth.emailExists': 'This email is already registered. Try signing in instead.',

  // Navigation
  'nav.home': 'Home',
  'nav.store': 'Car Store',
  'nav.rentals': 'Rentals',
  'nav.rewards': 'Rewards',
  'nav.profile': 'Profile',
  'nav.welcome': 'Welcome',

  // Dashboard
  'dash.availableBalance': 'Available Balance',
  'dash.recharge': 'Recharge',
  'dash.withdraw': 'Withdraw',
  'dash.withdrawalsAvailable': 'Withdrawals available',
  'dash.minWithdrawal': 'Minimum withdrawal is ₱500.00',
  'dash.totalEarnings': 'Total Earnings',
  'dash.activeRentals': 'Active Rentals',
  'dash.featuredCars': 'Featured Cars',
  'dash.recentTransactions': 'Recent Transactions',
  'dash.noTransactions': 'No transactions yet',
  'dash.free': 'FREE',
  'dash.from': 'From',
  'dash.days': 'days',
  'dash.perDay': '/day',

  // Status
  'status.pending': 'Pending',
  'status.approved': 'Approved',
  'status.rejected': 'Rejected',
  'status.active': 'Active',
  'status.completed': 'Completed',
  'status.cancelled': 'Cancelled',
  'status.paused': 'Paused',

  // Car Store
  'store.title': 'Car Store',
  'store.subtitle': 'Choose a car and start earning daily returns',
  'store.rentalPrice': 'Rental price',
  'store.dailyReturn': 'Daily return',
  'store.investmentAmount': 'Investment Amount',
  'store.starterCarAccess': 'Starter Car Access',
  'store.rentalPeriod': 'Rental Period',
  'store.dailyRate': 'Daily Rate',
  'store.dailyEarning': 'Daily Earning',
  'store.totalReturn': 'Total Return',
  'store.afterInvestmentBalance': 'After Investment Balance',
  'store.invest': 'Invest',
  'store.claimFreeCar': 'Claim Free Starter Car',
  'store.processing': 'Processing...',
  'store.investmentConfirmed': 'Investment Confirmed!',
  'store.nowActive': 'Your car rental is now active. You\'ll earn {amount} daily.',
  'store.freeStarterCar': 'Free starter car',
  'store.dailyReturnDesc': '2% (30 days) or 3% (60 days) daily return',
  'store.enterValidAmount': 'Please enter a valid amount',
  'store.freeCarNoPayment': 'The free starter car does not require payment',
  'store.minInvestment': 'Minimum investment amount is {amount}',
  'store.maxInvestment': 'Maximum investment amount is {amount}',
  'store.insufficientBalance': 'Insufficient balance. Please recharge your wallet first.',
  'store.availableBalance': 'Available balance',
  'store.min': 'Min',
  'store.max': 'Max',
  'store.insufficientRecharge': 'Insufficient balance — please recharge first.',
  'store.minInvestmentShort': 'Minimum investment is {amount}.',
  'store.maxInvestmentShort': 'Maximum investment is {amount}.',
  'store.fixed': 'Fixed',
  'store.starterBenefit': 'Starter benefit',
  'store.perDayRate': '% per day',
  'store.daysFixed': 'days, fixed for the starter car',
  'store.thisStarterFree': 'This starter car is free for one user only.',

  // My Rentals
  'rentals.title': 'My Rentals',
  'rentals.subtitle': 'Track your investment progress and earnings',
  'rentals.active': 'Active',
  'rentals.completed': 'Completed',
  'rentals.totalEarned': 'Total Earned',
  'rentals.all': 'all',
  'rentals.noRentals': 'No rentals found',
  'rentals.started': 'Started',
  'rentals.invested': 'Invested:',
  'rentals.daily': 'Daily:',
  'rentals.daysLeft': 'days left',
  'rentals.expectedTotal': 'Expected Total',

  // Rewards
  'rewards.title': 'Rewards Center',
  'rewards.subtitle': 'Earn carbon points and redeem rewards',
  'rewards.checkin': 'Check-in',
  'rewards.bubbleGame': 'Bubble Game',
  'rewards.coupons': 'Coupons',
  'rewards.gifts': 'Gifts',
  'rewards.carbonBalance': 'Carbon Points Balance',
  'rewards.worth': 'Worth:',
  'rewards.dailyCheckin': 'Daily Check-In',
  'rewards.checkinEveryDay': 'Check in every day to earn rewards!',
  'rewards.checkinReward': '+₱5 + 1 Carbon Point',
  'rewards.alreadyCheckedIn': 'Already Checked In Today',
  'rewards.checkInNow': 'Check In Now',
  'rewards.recentCheckins': 'Recent Check-ins',
  'rewards.bubblePopGame': 'Bubble Pop Game',
  'rewards.tapBubbles': 'Tap bubbles to earn carbon points!',
  'rewards.gameDesc': '15 seconds · Each bubble gives 1-5 points · One play per day',
  'rewards.duration': 'Duration',
  'rewards.perBubble': 'Per Bubble',
  'rewards.value': 'Value',
  'rewards.playNow': 'Play Now',
  'rewards.playedToday': 'Played Today - Come Back Tomorrow',
  'rewards.availableCoupons': 'Available Coupons',
  'rewards.noCoupons': 'No coupons available',
  'rewards.carbon': 'carbon',
  'rewards.claimed': 'Claimed',
  'rewards.soldOut': 'Sold Out',
  'rewards.expired': 'Expired',
  'rewards.needCarbon': 'Need {count} carbon',
  'rewards.claimFor': 'Claim for {count} carbon',
  'rewards.yourCoupons': 'Your Coupons',
  'rewards.giftList': 'Gift List',
  'rewards.redeemCarbon': 'Redeem your carbon points for cash rewards',
  'rewards.noGifts': 'No gifts available',
  'rewards.stock': 'Stock:',
  'rewards.outOfStock': 'Out of Stock',
  'rewards.redeemFor': 'Redeem for {count} carbon',
  'rewards.redeemedGifts': 'Redeemed Gifts',
  'rewards.checkinSuccess': 'Check-in successful! +₱{amount} and +{carbon} carbon point!',
  'rewards.alreadyCheckedToday': 'You already checked in today!',
  'rewards.couponClaimed': 'Coupon claimed! Its value has been added to your wallet.',
  'rewards.giftRedeemed': 'Gift redeemed! Its cash value has been added to your wallet.',

  // Recharge Modal
  'recharge.title': 'Recharge Wallet',
  'recharge.amount': 'Amount',
  'recharge.payment': 'Payment',
  'recharge.proof': 'Proof',
  'recharge.enterAmount': 'Enter Amount (₱,€,$)',
  'recharge.continue': 'Continue',
  'recharge.selectMethod': 'Select a payment method:',
  'recharge.back': 'Back',
  'recharge.transactionRef': 'Transaction Reference Number',
  'recharge.uploadScreenshot': 'Upload Payment Screenshot',
  'recharge.clickToUpload': 'Click to upload receipt',
  'recharge.uploading': 'Uploading...',
  'recharge.submitRecharge': 'Submit Recharge',
  'recharge.submitting': 'Submitting...',
  'recharge.success': 'Recharge Submitted!',
  'recharge.successDesc': 'Your deposit is pending admin approval. You\'ll be notified once verified.',
  'recharge.enterValid': 'Enter a valid amount',
  'recharge.maxAmount': 'Maximum recharge is ₱100,000 per request',

  // Withdraw Modal - basic labels
  'withdraw.title': 'Withdraw Wallet',
  'withdraw.amount': 'Amount',
  'withdraw.withdraw': 'Withdraw',
  'withdraw.back': 'Back',
  'withdraw.submit': 'Submit Withdrawal',

  // Profile
  'profile.profile': 'profile',
  'profile.preferences': 'preferences',
  'profile.wallets': 'wallets',
  'profile.security': 'security',
  'profile.referral': 'referral',
  'profile.history': 'history',
  'profile.fullName': 'Full Name',
  'profile.email': 'Email',
  'profile.phone': 'Phone',
  'profile.saveChanges': 'Save Changes',
  'profile.saved': 'Saved!',
  'profile.saving': 'Saving...',
  'profile.themeAccent': 'Theme Accent',
  'profile.chooseAccent': 'Choose the accent color used across your app highlights.',
  'profile.language': 'Language',
  'profile.displayCurrency': 'Display Currency',
  'profile.currencyDesc': 'Amounts across the app will show in your chosen currency.',
  'profile.notifSound': 'Notification Sound',
  'profile.soundDesc': 'Play a sound when in-app alerts appear',
  'profile.soundEnabled': 'Sound enabled',
  'profile.soundMuted': 'Sound muted',
  'profile.savePreferences': 'Save Preferences',
  'profile.withdrawalWallets': 'Withdrawal Wallets',
  'profile.walletsDesc': 'Save your GCash, PayMaya, bank, or crypto addresses',
  'profile.add': 'Add',
  'profile.noWallets': 'No wallets saved yet',
  'profile.tapToAdd': 'Tap to add your first withdrawal wallet',
  'profile.default': 'Default',
  'profile.newPassword': 'New Password',
  'profile.confirmPassword': 'Confirm Password',
  'profile.updatePassword': 'Update Password',
  'profile.passwordUpdated': 'Password updated successfully!',
  'profile.passwordsNoMatch': 'Passwords do not match',
  'profile.yourReferralCode': 'Your Referral Code',
  'profile.shareCode': 'Share this code with friends. Every registered referral helps you unlock higher VIP levels.',
  'profile.copy': 'Copy',
  'profile.copied': 'Copied!',
  'profile.vipRoadmap': 'VIP Referral Roadmap',
  'profile.refs': 'refs',
  'profile.vipContinue': 'VIP 6–10 continue one level per additional referral.',
  'profile.howItWorks': 'How it works',
  'profile.shareCodeStep': 'Share your referral code with friends',
  'profile.enterCodeStep': 'They enter the code when registering',
  'profile.investCarStep': 'They invest in any car on the platform',
  'profile.earnRewardsStep': 'You earn referral rewards as they grow',
  'profile.noHistory': 'No transaction history yet',
  'profile.recharge': 'Recharge',
  'profile.withdrawal': 'Withdrawal',
  'profile.signOut': 'Sign Out',
  'profile.memberSince': 'Member since',
  'profile.chooseAvatar': 'Choose a ready-made avatar',
  'profile.avatarStyles': 'Illustrated character styles with animated frames',
  'profile.avatarFrame': 'Avatar Frame',
  'profile.noFrame': 'No Frame',
  'profile.about': 'About',

  // Wallet modal
  'wallet.addWallet': 'Add Withdrawal Wallet',
  'wallet.method': 'Method',
  'wallet.label': 'Label (optional)',
  'wallet.accountName': 'Account Name',
  'wallet.accountNumber': 'Account Number',
  'wallet.mobileNumber': 'Mobile Number',
  'wallet.walletAddress': 'Wallet Address',
  'wallet.bankName': 'Bank Name',
  'wallet.bankNamePlaceholder': 'e.g. BPI, BDO, Metrobank',
  'wallet.setAsDefault': 'Set as default payout destination',
  'wallet.saveWallet': 'Save Wallet',
  'wallet.fillAllFields': 'Please fill in all required fields',
  'wallet.bankNameRequired': 'Bank name is required for bank transfers',

  // VIP
  'vip.starter': 'Starter',
  'vip.silver': 'Silver',
  'vip.gold': 'Gold',
  'vip.platinum': 'Platinum',
  'vip.diamond': 'Diamond',
  'vip.emerald': 'Emerald',
  'vip.sapphire': 'Sapphire',
  'vip.ruby': 'Ruby',
  'vip.onyx': 'Onyx',
  'vip.elite': 'Elite',
};

const fil: Dict = {
  'auth.welcomeBack': 'Maligayang pagbabalik',
  'auth.createAccount': 'Gumawa ng account',
  'auth.signInToManage': 'Mag-sign in para pamahalaan ang iyong investments',
  'auth.startEarning': 'Magsimulang kumita ng pang-araw-araw na returns ngayon',
  'auth.signIn': 'Mag-sign In',
  'auth.register': 'Magparehistro',
  'auth.fullName': 'Buong Pangalan',
  'auth.phoneNumber': 'Numero ng Telepono',
  'auth.referralCode': 'Referral Code (Opsyonal)',
  'auth.enterReferralCode': 'Ilagay ang referral code',
  'auth.email': 'Email',
  'auth.password': 'Password',
  'auth.pleaseWait': 'Mangyaring maghintay...',
  'auth.createAccountBtn': 'Gumawa ng Account',
  'auth.termsNotice': 'Sa pagpapatuloy, sumasang-ayon ka sa aming Terms of Service at Privacy Policy.',
  'auth.downloadApp': 'I-download Ang App',
  'auth.aboutCarziqo': 'Tungkol sa Carziqo.Ltd',
  'auth.investPremium': 'Mag-invest sa premium na mga kotse.',
  'auth.earnDaily': 'Kumita ng pang-araw-araw.',
  'auth.rentLuxury': 'Magrenta ng luxury na mga sasakyan, kumita ng pang-araw-araw na kita sa loob ng 30 o 60 araw na holding period.',
  'auth.upToDaily': 'Hanggang 5% pang-araw-araw na returns',
  'auth.competitiveRates': 'Competitive na rates sa premium car rentals',
  'auth.flexibleWithdrawal': 'Flexible na withdrawal',
  'auth.cashOut': 'I-cash out ang iyong kita anumang oras',
  'auth.secureTransactions': 'Ligtas na mga transaksyon',
  'auth.adminVerified': 'Admin-verified na mga pagbabayad at payouts',
  'auth.carRentalPlatform': 'Car Rental Earning Platform',
  'auth.passwordMinLength': 'Ang password ay dapat hindi bababa sa 6 na karakter',
  'auth.emailExists': 'Ang email na ito ay nakarehistro na. Subukang mag-sign in na lang.',

  'nav.home': 'Home',
  'nav.store': 'Car Store',
  'nav.rentals': 'Rentals',
  'nav.rewards': 'Rewards',
  'nav.profile': 'Profile',
  'nav.welcome': 'Maligayang pagdating',

  'dash.availableBalance': 'Available na Balanse',
  'dash.recharge': 'Recharge',
  'dash.withdraw': 'Withdraw',
  'dash.withdrawalsAvailable': 'Available ang withdrawals',
  'dash.minWithdrawal': 'Minimum na withdrawal ay ₱500.00',
  'dash.totalEarnings': 'Kabuuang Kita',
  'dash.activeRentals': 'Aktibong Rentals',
  'dash.featuredCars': 'Featured na mga Kotse',
  'dash.recentTransactions': 'Kamakailang mga Transaksyon',
  'dash.noTransactions': 'Wala pang transaksyon',
  'dash.free': 'LIBRE',
  'dash.from': 'Mula',
  'dash.days': 'araw',
  'dash.perDay': '/araw',

  'status.pending': 'Nakabinbin',
  'status.approved': 'Aprubado',
  'status.rejected': 'Tinanggihan',
  'status.active': 'Aktibo',
  'status.completed': 'Tapos na',
  'status.cancelled': 'Nakansela',
  'status.paused': 'Naka-pause',

  'store.title': 'Car Store',
  'store.subtitle': 'Pumili ng kotse at magsimulang kumita ng pang-araw-araw na returns',
  'store.rentalPrice': 'Presyo ng rental',
  'store.dailyReturn': 'Pang-araw-araw na return',
  'store.investmentAmount': 'Halaga ng Investment',
  'store.starterCarAccess': 'Starter Car Access',
  'store.rentalPeriod': 'Periodo ng Rental',
  'store.dailyRate': 'Pang-araw-araw na Rate',
  'store.dailyEarning': 'Pang-araw-araw na Kita',
  'store.totalReturn': 'Kabuuang Return',
  'store.afterInvestmentBalance': 'Balanse Pagkatapos ng Investment',
  'store.invest': 'Mag-invest',
  'store.claimFreeCar': 'Kunin ang Libreng Starter Car',
  'store.processing': 'Pinoproseso...',
  'store.investmentConfirmed': 'Nakumpirma ang Investment!',
  'store.nowActive': 'Aktibo na ang car rental mo. Makakakuha ka ng {amount} araw-araw.',
  'store.freeStarterCar': 'Libreng starter car',
  'store.dailyReturnDesc': '2% (30 araw) o 3% (60 araw) pang-araw-araw na return',
  'store.enterValidAmount': 'Mangyaring maglagay ng wastong halaga',
  'store.freeCarNoPayment': 'Ang libreng starter car ay hindi nangangailangan ng pagbabayad',
  'store.minInvestment': 'Pinakamababang halaga ng investment ay {amount}',
  'store.maxInvestment': 'Pinakamataas na halaga ng investment ay {amount}',
  'store.insufficientBalance': 'Kulang ang balanse. Mangyaring i-recharge muna ang wallet.',
  'store.availableBalance': 'Available na balanse',
  'store.min': 'Min',
  'store.max': 'Max',
  'store.insufficientRecharge': 'Kulang ang balanse — mangyaring mag-recharge muna.',
  'store.minInvestmentShort': 'Pinakamababa sa {amount} ang investment.',
  'store.maxInvestmentShort': 'Pinakamataas sa {amount} ang investment.',
  'store.fixed': 'Fixed',
  'store.starterBenefit': 'Starter benefit',
  'store.perDayRate': '% bawat araw',
  'store.daysFixed': 'araw, fixed para sa starter car',
  'store.thisStarterFree': 'Ang starter car na ito ay libre para sa isang user lang.',

  'rentals.title': 'Aking Rentals',
  'rentals.subtitle': 'Subaybayan ang progress at kita ng investment mo',
  'rentals.active': 'Aktibo',
  'rentals.completed': 'Tapos na',
  'rentals.totalEarned': 'Kabuuang Kinita',
  'rentals.all': 'lahat',
  'rentals.noRentals': 'Walang rentals na nahanap',
  'rentals.started': 'Nagsimula',
  'rentals.invested': 'Na-invest:',
  'rentals.daily': 'Araw-araw:',
  'rentals.daysLeft': 'araw na natitira',
  'rentals.expectedTotal': 'Inaasahang Kabuuan',

  'rewards.title': 'Rewards Center',
  'rewards.subtitle': 'Kumita ng carbon points at mag-redeem ng rewards',
  'rewards.checkin': 'Check-in',
  'rewards.bubbleGame': 'Bubble Game',
  'rewards.coupons': 'Coupons',
  'rewards.gifts': 'Regalo',
  'rewards.carbonBalance': 'Balanse ng Carbon Points',
  'rewards.worth': 'Halaga:',
  'rewards.dailyCheckin': 'Pang-araw-araw na Check-In',
  'rewards.checkinEveryDay': 'Mag-check in araw-araw para kumita ng rewards!',
  'rewards.checkinReward': '+₱5 + 1 Carbon Point',
  'rewards.alreadyCheckedIn': 'Naka-check In Na Ngayon',
  'rewards.checkInNow': 'Mag-check In Ngayon',
  'rewards.recentCheckins': 'Kamakailang Check-ins',
  'rewards.bubblePopGame': 'Bubble Pop Game',
  'rewards.tapBubbles': 'Pindutin ang bubbles para kumita ng carbon points!',
  'rewards.gameDesc': '15 segundo · Bawat bubble ay nagbibigay ng 1-5 points · Isang laro kada araw',
  'rewards.duration': 'Tagal',
  'rewards.perBubble': 'Bawat Bubble',
  'rewards.value': 'Halaga',
  'rewards.playNow': 'Laruin Ngayon',
  'rewards.playedToday': 'Nalaro Na Ngayon - Balik Bukas',
  'rewards.availableCoupons': 'Available na Coupons',
  'rewards.noCoupons': 'Walang available na coupons',
  'rewards.carbon': 'carbon',
  'rewards.claimed': 'Na-claim na',
  'rewards.soldOut': 'Ubos na',
  'rewards.expired': 'Expired na',
  'rewards.needCarbon': 'Kailangan ng {count} carbon',
  'rewards.claimFor': 'I-claim para sa {count} carbon',
  'rewards.yourCoupons': 'Iyong mga Coupons',
  'rewards.giftList': 'Listahan ng Regalo',
  'rewards.redeemCarbon': 'I-redeem ang carbon points mo para sa cash rewards',
  'rewards.noGifts': 'Walang available na regalo',
  'rewards.stock': 'Stock:',
  'rewards.outOfStock': 'Ubos na',
  'rewards.redeemFor': 'I-redeem para sa {count} carbon',
  'rewards.redeemedGifts': 'Na-redeem na Regalo',
  'rewards.checkinSuccess': 'Matagumpay ang check-in! +₱{amount} at +{carbon} carbon point!',
  'rewards.alreadyCheckedToday': 'Naka-check in ka na ngayon!',
  'rewards.couponClaimed': 'Na-claim ang coupon! Naidagdag na ang halaga sa wallet mo.',
  'rewards.giftRedeemed': 'Na-redeem ang regalo! Naidagdag na ang cash value sa wallet mo.',

  'recharge.title': 'I-recharge ang Wallet',
  'recharge.amount': 'Halaga',
  'recharge.payment': 'Pagbabayad',
  'recharge.proof': 'Proof',
  'recharge.enterAmount': 'Ilagay ang Halaga (₱,€,$)',
  'recharge.continue': 'Magpatuloy',
  'recharge.selectMethod': 'Pumili ng payment method:',
  'recharge.back': 'Bumalik',
  'recharge.transactionRef': 'Transaction Reference Number',
  'recharge.uploadScreenshot': 'I-upload ang Screenshot ng Pagbabayad',
  'recharge.clickToUpload': 'I-click para mag-upload ng resibo',
  'recharge.uploading': 'Naka-upload...',
  'recharge.submitRecharge': 'I-submit ang Recharge',
  'recharge.submitting': 'Nagsusumite...',
  'recharge.success': 'Na-submit ang Recharge!',
  'recharge.successDesc': 'Nakabinbin ang deposito mo para sa admin approval. Mapapabatid ka kapag na-verify na.',
  'recharge.enterValid': 'Maglagay ng wastong halaga',
  'recharge.maxAmount': 'Pinakamataas na recharge ay ₱100,000 kada request',

  'withdraw.title': 'I-withdraw ang Wallet',
  'withdraw.amount': 'Halaga',
  'withdraw.withdraw': 'Withdraw',
  'withdraw.back': 'Bumalik',
  'withdraw.submit': 'I-submit ang Withdrawal',

  'profile.profile': 'profile',
  'profile.preferences': 'preferences',
  'profile.wallets': 'wallets',
  'profile.security': 'security',
  'profile.referral': 'referral',
  'profile.history': 'history',
  'profile.fullName': 'Buong Pangalan',
  'profile.email': 'Email',
  'profile.phone': 'Telepono',
  'profile.saveChanges': 'I-save ang Pagbabago',
  'profile.saved': 'Na-save!',
  'profile.saving': 'Nagsasave...',
  'profile.themeAccent': 'Theme Accent',
  'profile.chooseAccent': 'Piliin ang accent color na ginagamit sa app highlights.',
  'profile.language': 'Lengguwahe',
  'profile.displayCurrency': 'Display Currency',
  'profile.currencyDesc': 'Magpapakita ang mga halaga sa iyong napiling currency.',
  'profile.notifSound': 'Notification Sound',
  'profile.soundDesc': 'Mag-play ng sound kapag may in-app alerts',
  'profile.soundEnabled': 'Sound naka-on',
  'profile.soundMuted': 'Sound naka-off',
  'profile.savePreferences': 'I-save ang Preferences',
  'profile.withdrawalWallets': 'Withdrawal Wallets',
  'profile.walletsDesc': 'I-save ang GCash, PayMaya, bank, o crypto addresses mo',
  'profile.add': 'Idagdag',
  'profile.noWallets': 'Wala pang wallets na na-save',
  'profile.tapToAdd': 'I-tap para magdagdag ng unang withdrawal wallet',
  'profile.default': 'Default',
  'profile.newPassword': 'Bagong Password',
  'profile.confirmPassword': 'Kumpirmahin ang Password',
  'profile.updatePassword': 'I-update ang Password',
  'profile.passwordUpdated': 'Matagumpay na na-update ang password!',
  'profile.passwordsNoMatch': 'Hindi tugma ang mga password',
  'profile.yourReferralCode': 'Iyong Referral Code',
  'profile.shareCode': 'Ibahagi ang code na ito sa mga kaibigan. Bawat rehistradong referral ay tutulong sa pag-unlock ng mas mataas na VIP levels.',
  'profile.copy': 'Kopyahin',
  'profile.copied': 'Na-kopya!',
  'profile.vipRoadmap': 'VIP Referral Roadmap',
  'profile.refs': 'refs',
  'profile.vipContinue': 'VIP 6–10 ay isang level kada karagdagang referral.',
  'profile.howItWorks': 'Paano ito gumagana',
  'profile.shareCodeStep': 'Ibahagi ang referral code sa mga kaibigan',
  'profile.enterCodeStep': 'Ilalagay nila ang code kapag nagparehistro',
  'profile.investCarStep': 'Mag-i-invest sila sa anumang kotse sa platform',
  'profile.earnRewardsStep': 'Makakakuha ka ng referral rewards habang lumalaki sila',
  'profile.noHistory': 'Wala pang transaction history',
  'profile.recharge': 'Recharge',
  'profile.withdrawal': 'Withdrawal',
  'profile.signOut': 'Mag-sign Out',
  'profile.memberSince': 'Miyembro mula',
  'profile.chooseAvatar': 'Pumili ng ready-made na avatar',
  'profile.avatarStyles': 'Illustrated character styles na may animated frames',
  'profile.avatarFrame': 'Avatar Frame',
  'profile.noFrame': 'Walang Frame',
  'profile.about': 'Tungkol',

  'wallet.addWallet': 'Magdagdag ng Withdrawal Wallet',
  'wallet.method': 'Method',
  'wallet.label': 'Label (opsyonal)',
  'wallet.accountName': 'Pangalan ng Account',
  'wallet.accountNumber': 'Numero ng Account',
  'wallet.mobileNumber': 'Numero ng Mobile',
  'wallet.walletAddress': 'Wallet Address',
  'wallet.bankName': 'Pangalan ng Bank',
  'wallet.bankNamePlaceholder': 'hal. BPI, BDO, Metrobank',
  'wallet.setAsDefault': 'Itakda bilang default na payout destination',
  'wallet.saveWallet': 'I-save ang Wallet',
  'wallet.fillAllFields': 'Mangyaring punan ang lahat ng required na fields',
  'wallet.bankNameRequired': 'Kailangan ng bank name para sa bank transfers',

  'vip.starter': 'Starter',
  'vip.silver': 'Silver',
  'vip.gold': 'Gold',
  'vip.platinum': 'Platinum',
  'vip.diamond': 'Diamond',
  'vip.emerald': 'Emerald',
  'vip.sapphire': 'Sapphire',
  'vip.ruby': 'Ruby',
  'vip.onyx': 'Onyx',
  'vip.elite': 'Elite',
};

// Auto-generate other languages from English as fallback base.
// These provide translated strings for the most visible UI; missing keys fall back to English.
const es: Dict = {
  'auth.welcomeBack': 'Bienvenido de nuevo',
  'auth.createAccount': 'Crea tu cuenta',
  'auth.signInToManage': 'Inicia sesión para gestionar tus inversiones',
  'auth.startEarning': 'Comienza a ganar rendimientos diarios hoy',
  'auth.signIn': 'Iniciar Sesión',
  'auth.register': 'Registrarse',
  'auth.fullName': 'Nombre Completo',
  'auth.phoneNumber': 'Número de Teléfono',
  'auth.referralCode': 'Código de Referido (Opcional)',
  'auth.enterReferralCode': 'Ingresa el código de referido',
  'auth.email': 'Correo',
  'auth.password': 'Contraseña',
  'auth.pleaseWait': 'Por favor espera...',
  'auth.createAccountBtn': 'Crear Cuenta',
  'auth.termsNotice': 'Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad.',
  'auth.downloadApp': 'Descarga Nuestra App',
  'auth.aboutCarziqo': 'Acerca de Carziqo.Ltd',
  'auth.investPremium': 'Invierte en autos premium.',
  'auth.earnDaily': 'Gana rendimientos diarios.',
  'auth.rentLuxury': 'Renta vehículos de lujo, gana ganancias diarias en períodos de 30 o 60 días.',
  'auth.upToDaily': 'Hasta 5% de rendimiento diario',
  'auth.competitiveRates': 'Tasas competitivas en alquiler de autos premium',
  'auth.flexibleWithdrawal': 'Retiro flexible',
  'auth.cashOut': 'Retira tus ganancias en cualquier momento',
  'auth.secureTransactions': 'Transacciones seguras',
  'auth.adminVerified': 'Pagos y pagos verificados por administrador',
  'auth.carRentalPlatform': 'Plataforma de Alquiler de Autos',
  'auth.passwordMinLength': 'La contraseña debe tener al menos 6 caracteres',
  'auth.emailExists': 'Este correo ya está registrado. Intenta iniciar sesión.',

  'nav.home': 'Inicio', 'nav.store': 'Autos', 'nav.rentals': 'Alquileres', 'nav.rewards': 'Recompensas', 'nav.profile': 'Perfil', 'nav.welcome': 'Bienvenido',

  'dash.availableBalance': 'Saldo Disponible', 'dash.recharge': 'Recargar', 'dash.withdraw': 'Retirar',
  'dash.withdrawalsAvailable': 'Retiros disponibles', 'dash.minWithdrawal': 'Retiro mínimo es ₱500.00',
  'dash.totalEarnings': 'Ganancias Totales', 'dash.activeRentals': 'Alquileres Activos',
  'dash.featuredCars': 'Autos Destacados', 'dash.recentTransactions': 'Transacciones Recientes',
  'dash.noTransactions': 'Sin transacciones aún', 'dash.free': 'GRATIS', 'dash.from': 'Desde', 'dash.days': 'días', 'dash.perDay': '/día',

  'status.pending': 'Pendiente', 'status.approved': 'Aprobado', 'status.rejected': 'Rechazado',
  'status.active': 'Activo', 'status.completed': 'Completado', 'status.cancelled': 'Cancelado', 'status.paused': 'Pausado',

  'store.title': 'Tienda de Autos', 'store.subtitle': 'Elige un auto y comienza a ganar rendimientos diarios',
  'store.rentalPrice': 'Precio de alquiler', 'store.dailyReturn': 'Rendimiento diario',
  'store.investmentAmount': 'Monto de Inversión', 'store.rentalPeriod': 'Período de Alquiler',
  'store.dailyRate': 'Tasa Diaria', 'store.dailyEarning': 'Ganancia Diaria', 'store.totalReturn': 'Retorno Total',
  'store.afterInvestmentBalance': 'Saldo Después de Inversión', 'store.invest': 'Invertir',
  'store.claimFreeCar': 'Reclamar Auto Inicial Gratis', 'store.processing': 'Procesando...',
  'store.investmentConfirmed': '¡Inversión Confirmada!',
  'store.nowActive': 'Tu alquiler de auto está activo. Ganarás {amount} diariamente.',
  'store.freeStarterCar': 'Auto inicial gratis',
  'store.dailyReturnDesc': '2% (30 días) o 3% (60 días) rendimiento diario',
  'store.enterValidAmount': 'Por favor ingresa un monto válido',
  'store.freeCarNoPayment': 'El auto inicial gratis no requiere pago',
  'store.minInvestment': 'El monto mínimo de inversión es {amount}',
  'store.maxInvestment': 'El monto máximo de inversión es {amount}',
  'store.insufficientBalance': 'Saldo insuficiente. Por favor recarga tu billetera primero.',
  'store.availableBalance': 'Saldo disponible', 'store.min': 'Mín', 'store.max': 'Máx',
  'store.insufficientRecharge': 'Saldo insuficiente — por favor recarga primero.',
  'store.minInvestmentShort': 'La inversión mínima es {amount}.',
  'store.maxInvestmentShort': 'La inversión máxima es {amount}.',
  'store.fixed': 'Fijo', 'store.starterBenefit': 'Beneficio inicial', 'store.perDayRate': '% por día',
  'store.daysFixed': 'días, fijo para el auto inicial', 'store.thisStarterFree': 'Este auto inicial es gratis solo para un usuario.',

  'rentals.title': 'Mis Alquileres', 'rentals.subtitle': 'Sigue el progreso y ganancias de tu inversión',
  'rentals.active': 'Activo', 'rentals.completed': 'Completado', 'rentals.totalEarned': 'Total Ganado',
  'rentals.all': 'todos', 'rentals.noRentals': 'No se encontraron alquileres',
  'rentals.started': 'Iniciado', 'rentals.invested': 'Invertido:', 'rentals.daily': 'Diario:',
  'rentals.daysLeft': 'días restantes', 'rentals.expectedTotal': 'Total Esperado',

  'rewards.title': 'Centro de Recompensas', 'rewards.subtitle': 'Gana puntos de carbono y canjea recompensas',
  'rewards.checkin': 'Check-in', 'rewards.bubbleGame': 'Juego de Burbujas', 'rewards.coupons': 'Cupones', 'rewards.gifts': 'Regalos',
  'rewards.carbonBalance': 'Saldo de Puntos de Carbono', 'rewards.worth': 'Valor:',
  'rewards.dailyCheckin': 'Check-in Diario', 'rewards.checkinEveryDay': '¡Haz check-in todos los días para ganar recompensas!',
  'rewards.checkinReward': '+₱5 + 1 Punto de Carbono', 'rewards.alreadyCheckedIn': 'Ya hiciste Check-in Hoy',
  'rewards.checkInNow': 'Hacer Check-in Ahora', 'rewards.recentCheckins': 'Check-ins Recientes',
  'rewards.bubblePopGame': 'Juego de Burbujas', 'rewards.tapBubbles': '¡Toca las burbujas para ganar puntos de carbono!',
  'rewards.gameDesc': '15 segundos · Cada burbuja da 1-5 puntos · Un juego por día',
  'rewards.duration': 'Duración', 'rewards.perBubble': 'Por Burbuja', 'rewards.value': 'Valor',
  'rewards.playNow': 'Jugar Ahora', 'rewards.playedToday': 'Jugado Hoy - Vuelve Mañana',
  'rewards.availableCoupons': 'Cupones Disponibles', 'rewards.noCoupons': 'No hay cupones disponibles',
  'rewards.carbon': 'carbono', 'rewards.claimed': 'Reclamado', 'rewards.soldOut': 'Agotado',
  'rewards.expired': 'Expirado', 'rewards.needCarbon': 'Necesitas {count} carbono',
  'rewards.claimFor': 'Reclamar por {count} carbono', 'rewards.yourCoupons': 'Tus Cupones',
  'rewards.giftList': 'Lista de Regalos', 'rewards.redeemCarbon': 'Canjea tus puntos de carbono por recompensas en efectivo',
  'rewards.noGifts': 'No hay regalos disponibles', 'rewards.stock': 'Existencia:',
  'rewards.outOfStock': 'Agotado', 'rewards.redeemFor': 'Canjear por {count} carbono',
  'rewards.redeemedGifts': 'Regalos Canjeados',
  'rewards.checkinSuccess': '¡Check-in exitoso! +₱{amount} y +{carbon} punto de carbono!',
  'rewards.alreadyCheckedToday': '¡Ya hiciste check-in hoy!',
  'rewards.couponClaimed': '¡Cupón reclamado! Su valor se ha añadido a tu billetera.',
  'rewards.giftRedeemed': '¡Regalo canjeado! Su valor en efectivo se ha añadido a tu billetera.',

  'recharge.title': 'Recargar Billetera', 'recharge.amount': 'Monto', 'recharge.payment': 'Pago', 'recharge.proof': 'Comprobante',
  'recharge.enterAmount': 'Ingresa el Monto (₱,€,$)', 'recharge.continue': 'Continuar', 'recharge.selectMethod': 'Selecciona un método de pago:',
  'recharge.back': 'Atrás', 'recharge.transactionRef': 'Número de Referencia de Transacción',
  'recharge.uploadScreenshot': 'Subir Captura de Pantalla del Pago', 'recharge.clickToUpload': 'Haz clic para subir el recibo',
  'recharge.uploading': 'Subiendo...', 'recharge.submitRecharge': 'Enviar Recarga', 'recharge.submitting': 'Enviando...',
  'recharge.success': '¡Recarga Enviada!', 'recharge.successDesc': 'Tu depósito está pendiente de aprobación del administrador. Se te notificará una vez verificado.',
  'recharge.enterValid': 'Ingresa un monto válido', 'recharge.maxAmount': 'La recarga máxima es ₱100,000 por solicitud',

  'withdraw.title': 'Retirar Billetera', 'withdraw.amount': 'Monto', 'withdraw.withdraw': 'Retirar', 'withdraw.back': 'Atrás', 'withdraw.submit': 'Enviar Retiro',

  'profile.profile': 'perfil', 'profile.preferences': 'preferencias', 'profile.wallets': 'billeteras',
  'profile.security': 'seguridad', 'profile.referral': 'referidos', 'profile.history': 'historial',
  'profile.fullName': 'Nombre Completo', 'profile.email': 'Correo', 'profile.phone': 'Teléfono',
  'profile.saveChanges': 'Guardar Cambios', 'profile.saved': '¡Guardado!', 'profile.saving': 'Guardando...',
  'profile.themeAccent': 'Acento de Tema', 'profile.chooseAccent': 'Elige el color de acento usado en los elementos de la app.',
  'profile.language': 'Idioma', 'profile.displayCurrency': 'Moneda de Visualización',
  'profile.currencyDesc': 'Los montos se mostrarán en tu moneda elegida.', 'profile.notifSound': 'Sonido de Notificación',
  'profile.soundDesc': 'Reproduce un sonido cuando aparecen alertas', 'profile.soundEnabled': 'Sonido activado',
  'profile.soundMuted': 'Sonido silenciado', 'profile.savePreferences': 'Guardar Preferencias',
  'profile.withdrawalWallets': 'Billeteras de Retiro', 'profile.walletsDesc': 'Guarda tus direcciones de GCash, PayMaya, banco o cripto',
  'profile.add': 'Añadir', 'profile.noWallets': 'Sin billeteras guardadas', 'profile.tapToAdd': 'Toca para añadir tu primera billetera',
  'profile.default': 'Predeterminado', 'profile.newPassword': 'Nueva Contraseña', 'profile.confirmPassword': 'Confirmar Contraseña',
  'profile.updatePassword': 'Actualizar Contraseña', 'profile.passwordUpdated': '¡Contraseña actualizada!',
  'profile.passwordsNoMatch': 'Las contraseñas no coinciden', 'profile.yourReferralCode': 'Tu Código de Referido',
  'profile.shareCode': 'Comparte este código con amigos. Cada referido registrado te ayuda a desbloquear niveles VIP más altos.',
  'profile.copy': 'Copiar', 'profile.copied': '¡Copiado!', 'profile.vipRoadmap': 'Hoja de Ruta VIP',
  'profile.refs': 'refs', 'profile.vipContinue': 'VIP 6–10 continúa un nivel por cada referido adicional.',
  'profile.howItWorks': 'Cómo funciona', 'profile.shareCodeStep': 'Comparte tu código de referido con amigos',
  'profile.enterCodeStep': 'Ellos ingresan el código al registrarse', 'profile.investCarStep': 'Invierten en cualquier auto de la plataforma',
  'profile.earnRewardsStep': 'Ganas recompensas de referido a medida que crecen', 'profile.noHistory': 'Sin historial de transacciones',
  'profile.recharge': 'Recarga', 'profile.withdrawal': 'Retiro', 'profile.signOut': 'Cerrar Sesión',
  'profile.memberSince': 'Miembro desde', 'profile.chooseAvatar': 'Elige un avatar prediseñado',
  'profile.avatarStyles': 'Estilos de personajes ilustrados con marcos animados', 'profile.avatarFrame': 'Marco de Avatar',
  'profile.noFrame': 'Sin Marco', 'profile.about': 'Acerca de',

  'wallet.addWallet': 'Añadir Billetera de Retiro', 'wallet.method': 'Método', 'wallet.label': 'Etiqueta (opcional)',
  'wallet.accountName': 'Nombre de Cuenta', 'wallet.accountNumber': 'Número de Cuenta', 'wallet.mobileNumber': 'Número de Móvil',
  'wallet.walletAddress': 'Dirección de Billetera', 'wallet.bankName': 'Nombre del Banco', 'wallet.bankNamePlaceholder': 'ej. BPI, BDO, Metrobank',
  'wallet.setAsDefault': 'Establecer como destino de pago predeterminado', 'wallet.saveWallet': 'Guardar Billetera',
  'wallet.fillAllFields': 'Por favor completa todos los campos', 'wallet.bankNameRequired': 'El nombre del banco es requerido para transferencias',

  'vip.starter': 'Inicial', 'vip.silver': 'Plata', 'vip.gold': 'Oro', 'vip.platinum': 'Platino',
  'vip.diamond': 'Diamante', 'vip.emerald': 'Esmeralda', 'vip.sapphire': 'Zafiro', 'vip.ruby': 'Rubí',
  'vip.onyx': 'Ónice', 'vip.elite': 'Élite',
};

const zh: Dict = {
  'auth.welcomeBack': '欢迎回来', 'auth.createAccount': '创建您的账户',
  'auth.signInToManage': '登录以管理您的投资', 'auth.startEarning': '立即开始赚取每日回报',
  'auth.signIn': '登录', 'auth.register': '注册', 'auth.fullName': '全名', 'auth.phoneNumber': '电话号码',
  'auth.referralCode': '推荐码（可选）', 'auth.enterReferralCode': '输入推荐码', 'auth.email': '邮箱',
  'auth.password': '密码', 'auth.pleaseWait': '请稍候...', 'auth.createAccountBtn': '创建账户',
  'auth.termsNotice': '继续即表示您同意我们的服务条款和隐私政策。', 'auth.downloadApp': '下载我们的应用',
  'auth.aboutCarziqo': '关于 Carziqo.Ltd', 'auth.investPremium': '投资豪华汽车。', 'auth.earnDaily': '赚取每日回报。',
  'auth.rentLuxury': '租赁豪华车辆，在30或60天持有期内赚取每日利润。', 'auth.upToDaily': '每日最高5%回报',
  'auth.competitiveRates': '豪华汽车租赁的竞争性费率', 'auth.flexibleWithdrawal': '灵活提款',
  'auth.cashOut': '随时提取您的收益', 'auth.secureTransactions': '安全交易', 'auth.adminVerified': '管理员验证的付款和支出',
  'auth.carRentalPlatform': '汽车租赁赚钱平台', 'auth.passwordMinLength': '密码至少需要6个字符',
  'auth.emailExists': '此邮箱已注册。请尝试登录。',

  'nav.home': '首页', 'nav.store': '汽车商店', 'nav.rentals': '租赁', 'nav.rewards': '奖励', 'nav.profile': '个人资料', 'nav.welcome': '欢迎',

  'dash.availableBalance': '可用余额', 'dash.recharge': '充值', 'dash.withdraw': '提款',
  'dash.withdrawalsAvailable': '可提款', 'dash.minWithdrawal': '最低提款为₱500.00',
  'dash.totalEarnings': '总收益', 'dash.activeRentals': '活跃租赁', 'dash.featuredCars': '精选汽车',
  'dash.recentTransactions': '最近交易', 'dash.noTransactions': '暂无交易', 'dash.free': '免费',
  'dash.from': '从', 'dash.days': '天', 'dash.perDay': '/天',

  'status.pending': '待处理', 'status.approved': '已批准', 'status.rejected': '已拒绝',
  'status.active': '活跃', 'status.completed': '已完成', 'status.cancelled': '已取消', 'status.paused': '已暂停',

  'store.title': '汽车商店', 'store.subtitle': '选择一辆车并开始赚取每日回报',
  'store.rentalPrice': '租赁价格', 'store.dailyReturn': '每日回报', 'store.investmentAmount': '投资金额',
  'store.rentalPeriod': '租赁期', 'store.dailyRate': '日费率', 'store.dailyEarning': '日收益',
  'store.totalReturn': '总回报', 'store.afterInvestmentBalance': '投资后余额', 'store.invest': '投资',
  'store.claimFreeCar': '领取免费入门车', 'store.processing': '处理中...', 'store.investmentConfirmed': '投资已确认！',
  'store.nowActive': '您的汽车租赁现已激活。您每天将赚取{amount}。',
  'store.freeStarterCar': '免费入门车', 'store.dailyReturnDesc': '2%（30天）或3%（60天）每日回报',
  'store.enterValidAmount': '请输入有效金额', 'store.freeCarNoPayment': '免费入门车无需付款',
  'store.minInvestment': '最低投资金额为{amount}', 'store.maxInvestment': '最高投资金额为{amount}',
  'store.insufficientBalance': '余额不足。请先充值您的钱包。', 'store.availableBalance': '可用余额',
  'store.min': '最低', 'store.max': '最高', 'store.insufficientRecharge': '余额不足 — 请先充值。',
  'store.minInvestmentShort': '最低投资为{amount}。', 'store.maxInvestmentShort': '最高投资为{amount}。',
  'store.fixed': '固定', 'store.starterBenefit': '入门福利', 'store.perDayRate': '% 每天',
  'store.daysFixed': '天，入门车固定', 'store.thisStarterFree': '此入门车仅免费供一位用户使用。',

  'rentals.title': '我的租赁', 'rentals.subtitle': '跟踪您的投资进度和收益',
  'rentals.active': '活跃', 'rentals.completed': '已完成', 'rentals.totalEarned': '总收益',
  'rentals.all': '全部', 'rentals.noRentals': '未找到租赁', 'rentals.started': '开始于',
  'rentals.invested': '已投资：', 'rentals.daily': '每日：', 'rentals.daysLeft': '天剩余',
  'rentals.expectedTotal': '预期总额',

  'rewards.title': '奖励中心', 'rewards.subtitle': '赚取碳积分并兑换奖励',
  'rewards.checkin': '签到', 'rewards.bubbleGame': '气泡游戏', 'rewards.coupons': '优惠券', 'rewards.gifts': '礼物',
  'rewards.carbonBalance': '碳积分余额', 'rewards.worth': '价值：', 'rewards.dailyCheckin': '每日签到',
  'rewards.checkinEveryDay': '每天签到赚取奖励！', 'rewards.checkinReward': '+₱5 + 1 碳积分',
  'rewards.alreadyCheckedIn': '今天已签到', 'rewards.checkInNow': '立即签到', 'rewards.recentCheckins': '最近签到',
  'rewards.bubblePopGame': '气泡游戏', 'rewards.tapBubbles': '点击气泡赚取碳积分！',
  'rewards.gameDesc': '15秒 · 每个气泡1-5积分 · 每天一次',
  'rewards.duration': '时长', 'rewards.perBubble': '每气泡', 'rewards.value': '价值',
  'rewards.playNow': '立即游戏', 'rewards.playedToday': '今天已玩 - 明天再来',
  'rewards.availableCoupons': '可用优惠券', 'rewards.noCoupons': '无可用优惠券',
  'rewards.carbon': '碳', 'rewards.claimed': '已领取', 'rewards.soldOut': '售罄',
  'rewards.expired': '已过期', 'rewards.needCarbon': '需要{count}碳',
  'rewards.claimFor': '用{count}碳领取', 'rewards.yourCoupons': '您的优惠券',
  'rewards.giftList': '礼物列表', 'rewards.redeemCarbon': '将碳积分兑换为现金奖励',
  'rewards.noGifts': '无可用礼物', 'rewards.stock': '库存：', 'rewards.outOfStock': '缺货',
  'rewards.redeemFor': '用{count}碳兑换', 'rewards.redeemedGifts': '已兑换礼物',
  'rewards.checkinSuccess': '签到成功！+₱{amount} 和 +{carbon} 碳积分！',
  'rewards.alreadyCheckedToday': '您今天已经签到了！', 'rewards.couponClaimed': '优惠券已领取！其价值已添加到您的钱包。',
  'rewards.giftRedeemed': '礼物已兑换！其现金价值已添加到您的钱包。',

  'recharge.title': '充值钱包', 'recharge.amount': '金额', 'recharge.payment': '支付', 'recharge.proof': '凭证',
  'recharge.enterAmount': '输入金额 (₱,€,$)', 'recharge.continue': '继续', 'recharge.selectMethod': '选择支付方式：',
  'recharge.back': '返回', 'recharge.transactionRef': '交易参考号', 'recharge.uploadScreenshot': '上传付款截图',
  'recharge.clickToUpload': '点击上传收据', 'recharge.uploading': '上传中...', 'recharge.submitRecharge': '提交充值',
  'recharge.submitting': '提交中...', 'recharge.success': '充值已提交！',
  'recharge.successDesc': '您的存款正在等待管理员批准。验证后您将收到通知。',
  'recharge.enterValid': '请输入有效金额', 'recharge.maxAmount': '每次充值上限₱100,000',

  'withdraw.title': '提款钱包', 'withdraw.amount': '金额', 'withdraw.withdraw': '提款', 'withdraw.back': '返回', 'withdraw.submit': '提交提款',

  'profile.profile': '资料', 'profile.preferences': '偏好', 'profile.wallets': '钱包',
  'profile.security': '安全', 'profile.referral': '推荐', 'profile.history': '历史',
  'profile.fullName': '全名', 'profile.email': '邮箱', 'profile.phone': '电话',
  'profile.saveChanges': '保存更改', 'profile.saved': '已保存！', 'profile.saving': '保存中...',
  'profile.themeAccent': '主题色调', 'profile.chooseAccent': '选择应用高亮中使用的强调色。',
  'profile.language': '语言', 'profile.displayCurrency': '显示货币', 'profile.currencyDesc': '金额将以您选择的货币显示。',
  'profile.notifSound': '通知声音', 'profile.soundDesc': '应用内提醒出现时播放声音', 'profile.soundEnabled': '声音已启用',
  'profile.soundMuted': '声音已静音', 'profile.savePreferences': '保存偏好',
  'profile.withdrawalWallets': '提款钱包', 'profile.walletsDesc': '保存您的GCash、PayMaya、银行或加密地址',
  'profile.add': '添加', 'profile.noWallets': '尚无保存的钱包', 'profile.tapToAdd': '点击添加您的第一个提款钱包',
  'profile.default': '默认', 'profile.newPassword': '新密码', 'profile.confirmPassword': '确认密码',
  'profile.updatePassword': '更新密码', 'profile.passwordUpdated': '密码更新成功！', 'profile.passwordsNoMatch': '密码不匹配',
  'profile.yourReferralCode': '您的推荐码', 'profile.shareCode': '与朋友分享此代码。每个注册的推荐人都帮助您解锁更高的VIP等级。',
  'profile.copy': '复制', 'profile.copied': '已复制！', 'profile.vipRoadmap': 'VIP推荐路线图',
  'profile.refs': '推荐', 'profile.vipContinue': 'VIP 6–10 每增加一个推荐人升一级。',
  'profile.howItWorks': '运作方式', 'profile.shareCodeStep': '与朋友分享您的推荐码',
  'profile.enterCodeStep': '他们注册时输入代码', 'profile.investCarStep': '他们在平台上投资任何汽车',
  'profile.earnRewardsStep': '随着他们成长，您赚取推荐奖励', 'profile.noHistory': '暂无交易历史',
  'profile.recharge': '充值', 'profile.withdrawal': '提款', 'profile.signOut': '退出登录',
  'profile.memberSince': '注册于', 'profile.chooseAvatar': '选择预设头像',
  'profile.avatarStyles': '带动画框的插画角色风格', 'profile.avatarFrame': '头像边框', 'profile.noFrame': '无边框',
  'profile.about': '关于',

  'wallet.addWallet': '添加提款钱包', 'wallet.method': '方式', 'wallet.label': '标签（可选）',
  'wallet.accountName': '账户名', 'wallet.accountNumber': '账号', 'wallet.mobileNumber': '手机号',
  'wallet.walletAddress': '钱包地址', 'wallet.bankName': '银行名称', 'wallet.bankNamePlaceholder': '例如 BPI, BDO, Metrobank',
  'wallet.setAsDefault': '设为默认支付目的地', 'wallet.saveWallet': '保存钱包',
  'wallet.fillAllFields': '请填写所有必填字段', 'wallet.bankNameRequired': '银行转账需要银行名称',

  'vip.starter': '入门', 'vip.silver': '白银', 'vip.gold': '黄金', 'vip.platinum': '铂金',
  'vip.diamond': '钻石', 'vip.emerald': '翡翠', 'vip.sapphire': '蓝宝石', 'vip.ruby': '红宝石',
  'vip.onyx': '玛瑙', 'vip.elite': '精英',
};

export const translations: Record<LangCode, Dict> = { en, fil, es, zh };

// Fill in missing languages with English as fallback.
// For languages we haven't fully translated, we still register them
// so the UI can switch; untranslated keys fall back to English.
const extraLangs: LangCode[] = ['hi', 'ar', 'pt', 'fr', 'de', 'ja', 'ko', 'ru', 'id', 'vi', 'th', 'ms', 'tr', 'it', 'nl'];
for (const lang of extraLangs) {
  if (!translations[lang]) {
    translations[lang] = { ...en };
  }
}

// Hindi
const hi: Dict = {
  'auth.welcomeBack': 'वापसी पर स्वागत है', 'auth.createAccount': 'अपना खाता बनाएं',
  'auth.signInToManage': 'अपने निवेश प्रबंधित करने के लिए साइन इन करें',
  'auth.startEarning': 'आज ही दैनिक रिटर्न कमाना शुरू करें', 'auth.signIn': 'साइन इन',
  'auth.register': 'रजिस्टर करें', 'auth.fullName': 'पूरा नाम', 'auth.phoneNumber': 'फ़ोन नंबर',
  'auth.referralCode': 'रेफ़रल कोड (वैकल्पिक)', 'auth.enterReferralCode': 'रेफ़रल कोड दर्ज करें',
  'auth.email': 'ईमेल', 'auth.password': 'पासवर्ड', 'auth.pleaseWait': 'कृपया प्रतीक्षा करें...',
  'auth.createAccountBtn': 'खाता बनाएं', 'auth.downloadApp': 'हमारा ऐप डाउनलोड करें',
  'auth.aboutCarziqo': 'Carziqo.Ltd के बारे में', 'auth.carRentalPlatform': 'कार रेंटल कमाई प्लेटफ़ॉर्म',
  'auth.passwordMinLength': 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए',

  'nav.home': 'होम', 'nav.store': 'कार स्टोर', 'nav.rentals': 'रेंटल', 'nav.rewards': 'पुरस्कार', 'nav.profile': 'प्रोफ़ाइल', 'nav.welcome': 'स्वागत है',

  'dash.availableBalance': 'उपलब्ध शेष', 'dash.recharge': 'रिचार्ज', 'dash.withdraw': 'निकासी',
  'dash.totalEarnings': 'कुल कमाई', 'dash.activeRentals': 'सक्रिय रेंटल', 'dash.featuredCars': 'फ़ीचर्ड कारें',
  'dash.recentTransactions': 'हाल के लेनदेन', 'dash.noTransactions': 'अभी तक कोई लेनदेन नहीं',
  'dash.free': 'मुफ़्त', 'dash.from': 'से', 'dash.days': 'दिन', 'dash.perDay': '/दिन',

  'status.pending': 'लंबित', 'status.approved': 'स्वीकृत', 'status.rejected': 'अस्वीकृत',
  'status.active': 'सक्रिय', 'status.completed': 'पूर्ण', 'status.cancelled': 'रद्द', 'status.paused': 'रुका हुआ',

  'store.title': 'कार स्टोर', 'store.invest': 'निवेश करें', 'store.processing': 'प्रसंस्करण...',
  'store.investmentConfirmed': 'निवेश की पुष्टि हुई!',

  'rentals.title': 'मेरी रेंटल', 'rentals.active': 'सक्रिय', 'rentals.completed': 'पूर्ण', 'rentals.totalEarned': 'कुल कमाई',
  'rentals.noRentals': 'कोई रेंटल नहीं मिली',

  'rewards.title': 'पुरस्कार केंद्र', 'rewards.checkin': 'चेक-इन', 'rewards.coupons': 'कूपन', 'rewards.gifts': 'उपहार',

  'recharge.title': 'वॉलेट रिचार्ज करें', 'recharge.amount': 'राशि', 'recharge.payment': 'भुगतान',
  'recharge.submitRecharge': 'रिचार्ज जमा करें', 'recharge.success': 'रिचार्ज जमा हो गया!',

  'withdraw.title': 'वॉलेट निकालें', 'withdraw.amount': 'राशि', 'withdraw.withdraw': 'निकासी',

  'profile.fullName': 'पूरा नाम', 'profile.email': 'ईमेल', 'profile.phone': 'फ़ोन',
  'profile.saveChanges': 'बदलाव सहेजें', 'profile.language': 'भाषा', 'profile.signOut': 'साइन आउट',

  'wallet.addWallet': 'निकासी वॉलेट जोड़ें', 'wallet.saveWallet': 'वॉलेट सहेजें',
};
translations.hi = { ...en, ...hi };

// Portuguese
const pt: Dict = {
  'auth.welcomeBack': 'Bem-vindo de volta', 'auth.createAccount': 'Crie sua conta',
  'auth.signInToManage': 'Entre para gerir seus investimentos', 'auth.startEarning': 'Comece a ganhar retornos diários hoje',
  'auth.signIn': 'Entrar', 'auth.register': 'Registar', 'auth.fullName': 'Nome Completo',
  'auth.phoneNumber': 'Número de Telefone', 'auth.referralCode': 'Código de Referência (Opcional)',
  'auth.enterReferralCode': 'Insira o código de referência', 'auth.email': 'Email', 'auth.password': 'Senha',
  'auth.pleaseWait': 'Por favor aguarde...', 'auth.createAccountBtn': 'Criar Conta',
  'auth.downloadApp': 'Baixe Nosso App', 'auth.aboutCarziqo': 'Sobre Carziqo.Ltd',
  'auth.carRentalPlatform': 'Plataforma de Aluguel de Carros', 'auth.passwordMinLength': 'A senha deve ter pelo menos 6 caracteres',

  'nav.home': 'Início', 'nav.store': 'Carros', 'nav.rentals': 'Aluguéis', 'nav.rewards': 'Recompensas', 'nav.profile': 'Perfil', 'nav.welcome': 'Bem-vindo',

  'dash.availableBalance': 'Saldo Disponível', 'dash.recharge': 'Recarregar', 'dash.withdraw': 'Sacar',
  'dash.totalEarnings': 'Ganhos Totais', 'dash.activeRentals': 'Aluguéis Ativos',
  'dash.featuredCars': 'Carros em Destaque', 'dash.recentTransactions': 'Transações Recentes',
  'dash.noTransactions': 'Sem transações ainda', 'dash.free': 'GRÁTIS', 'dash.from': 'Desde', 'dash.days': 'dias', 'dash.perDay': '/dia',

  'status.pending': 'Pendente', 'status.approved': 'Aprovado', 'status.rejected': 'Rejeitado',
  'status.active': 'Ativo', 'status.completed': 'Concluído', 'status.cancelled': 'Cancelado', 'status.paused': 'Pausado',

  'store.title': 'Loja de Carros', 'store.invest': 'Investir', 'store.processing': 'Processando...',
  'store.investmentConfirmed': 'Investimento Confirmado!',

  'rentals.title': 'Meus Aluguéis', 'rentals.active': 'Ativo', 'rentals.completed': 'Concluído',
  'rentals.totalEarned': 'Total Ganho', 'rentals.noRentals': 'Nenhum aluguel encontrado',

  'rewards.title': 'Centro de Recompensas', 'rewards.checkin': 'Check-in', 'rewards.coupons': 'Cupões', 'rewards.gifts': 'Presentes',

  'recharge.title': 'Recarregar Carteira', 'recharge.amount': 'Valor', 'recharge.payment': 'Pagamento',
  'recharge.submitRecharge': 'Enviar Recarga', 'recharge.success': 'Recarga Enviada!',

  'withdraw.title': 'Sacar Carteira', 'withdraw.amount': 'Valor', 'withdraw.withdraw': 'Sacar',

  'profile.fullName': 'Nome Completo', 'profile.email': 'Email', 'profile.phone': 'Telefone',
  'profile.saveChanges': 'Guardar Alterações', 'profile.language': 'Idioma', 'profile.signOut': 'Sair',

  'wallet.addWallet': 'Adicionar Carteira de Saque', 'wallet.saveWallet': 'Guardar Carteira',
};
translations.pt = { ...en, ...pt };

// French
const fr: Dict = {
  'auth.welcomeBack': 'Bon retour', 'auth.createAccount': 'Créez votre compte',
  'auth.signInToManage': 'Connectez-vous pour gérer vos investissements',
  'auth.startEarning': 'Commencez à gagner des rendements quotidiens aujourd\'hui',
  'auth.signIn': 'Se connecter', 'auth.register': 'S\'inscrire', 'auth.fullName': 'Nom complet',
  'auth.phoneNumber': 'Numéro de téléphone', 'auth.referralCode': 'Code de parrainage (Optionnel)',
  'auth.enterReferralCode': 'Entrez le code de parrainage', 'auth.email': 'Email', 'auth.password': 'Mot de passe',
  'auth.pleaseWait': 'Veuillez patienter...', 'auth.createAccountBtn': 'Créer un compte',
  'auth.downloadApp': 'Téléchargez notre application', 'auth.aboutCarziqo': 'À propos de Carziqo.Ltd',
  'auth.carRentalPlatform': 'Plateforme de location de voitures',
  'auth.passwordMinLength': 'Le mot de passe doit comporter au moins 6 caractères',

  'nav.home': 'Accueil', 'nav.store': 'Voitures', 'nav.rentals': 'Locations', 'nav.rewards': 'Récompenses', 'nav.profile': 'Profil', 'nav.welcome': 'Bienvenue',

  'dash.availableBalance': 'Solde disponible', 'dash.recharge': 'Recharger', 'dash.withdraw': 'Retirer',
  'dash.totalEarnings': 'Gains totaux', 'dash.activeRentals': 'Locations actives',
  'dash.featuredCars': 'Voitures en vedette', 'dash.recentTransactions': 'Transactions récentes',
  'dash.noTransactions': 'Aucune transaction', 'dash.free': 'GRATUIT', 'dash.from': 'À partir de', 'dash.days': 'jours', 'dash.perDay': '/jour',

  'status.pending': 'En attente', 'status.approved': 'Approuvé', 'status.rejected': 'Rejeté',
  'status.active': 'Actif', 'status.completed': 'Terminé', 'status.cancelled': 'Annulé', 'status.paused': 'En pause',

  'store.title': 'Magasin de voitures', 'store.invest': 'Investir', 'store.processing': 'Traitement...',
  'store.investmentConfirmed': 'Investissement confirmé !',

  'rentals.title': 'Mes locations', 'rentals.active': 'Actif', 'rentals.completed': 'Terminé',
  'rentals.totalEarned': 'Total gagné', 'rentals.noRentals': 'Aucune location trouvée',

  'rewards.title': 'Centre de récompenses', 'rewards.checkin': 'Check-in', 'rewards.coupons': 'Coupons', 'rewards.gifts': 'Cadeaux',

  'recharge.title': 'Recharger le portefeuille', 'recharge.amount': 'Montant', 'recharge.payment': 'Paiement',
  'recharge.submitRecharge': 'Envoyer la recharge', 'recharge.success': 'Recharge envoyée !',

  'withdraw.title': 'Retirer du portefeuille', 'withdraw.amount': 'Montant', 'withdraw.withdraw': 'Retirer',

  'profile.fullName': 'Nom complet', 'profile.email': 'Email', 'profile.phone': 'Téléphone',
  'profile.saveChanges': 'Enregistrer les modifications', 'profile.language': 'Langue', 'profile.signOut': 'Se déconnecter',

  'wallet.addWallet': 'Ajouter un portefeuille de retrait', 'wallet.saveWallet': 'Enregistrer le portefeuille',
};
translations.fr = { ...en, ...fr };

// Arabic
const ar: Dict = {
  'auth.welcomeBack': 'مرحبا بعودتك', 'auth.createAccount': 'أنشئ حسابك',
  'auth.signInToManage': 'سجل الدخول لإدارة استثماراتك', 'auth.startEarning': 'ابدأ بكسب العوائد اليومية اليوم',
  'auth.signIn': 'تسجيل الدخول', 'auth.register': 'تسجيل', 'auth.fullName': 'الاسم الكامل',
  'auth.phoneNumber': 'رقم الهاتف', 'auth.referralCode': 'رمز الإحالة (اختياري)',
  'auth.enterReferralCode': 'أدخل رمز الإحالة', 'auth.email': 'البريد الإلكتروني', 'auth.password': 'كلمة المرور',
  'auth.pleaseWait': 'يرجى الانتظار...', 'auth.createAccountBtn': 'إنشاء حساب',
  'auth.downloadApp': 'حمل تطبيقنا', 'auth.aboutCarziqo': 'حول Carziqo.Ltd',
  'auth.carRentalPlatform': 'منصة تأجير السيارات',
  'auth.passwordMinLength': 'يجب أن تكون كلمة المرور 6 أحرف على الأقل',

  'nav.home': 'الرئيسية', 'nav.store': 'متجر السيارات', 'nav.rentals': 'الإيجارات', 'nav.rewards': 'المكافآت', 'nav.profile': 'الملف الشخصي', 'nav.welcome': 'مرحبا',

  'dash.availableBalance': 'الرصيد المتاح', 'dash.recharge': 'شحن', 'dash.withdraw': 'سحب',
  'dash.totalEarnings': 'إجمالي الأرباح', 'dash.activeRentals': 'الإيجارات النشطة',
  'dash.featuredCars': 'سيارات مميزة', 'dash.recentTransactions': 'المعاملات الأخيرة',
  'dash.noTransactions': 'لا توجد معاملات', 'dash.free': 'مجاني', 'dash.from': 'من', 'dash.days': 'أيام', 'dash.perDay': '/يوم',

  'status.pending': 'قيد الانتظار', 'status.approved': 'موافق عليه', 'status.rejected': 'مرفوض',
  'status.active': 'نشط', 'status.completed': 'مكتمل', 'status.cancelled': 'ملغى', 'status.paused': 'متوقف',

  'store.title': 'متجر السيارات', 'store.invest': 'استثمر', 'store.processing': 'جاري المعالجة...',
  'store.investmentConfirmed': 'تم تأكيد الاستثمار!',

  'rentals.title': 'إيجاراتي', 'rentals.active': 'نشط', 'rentals.completed': 'مكتمل',
  'rentals.totalEarned': 'إجمالي المكتسب', 'rentals.noRentals': 'لم يتم العثور على إيجارات',

  'rewards.title': 'مركز المكافآت', 'rewards.checkin': 'تسجيل الدخول', 'rewards.coupons': 'كوبونات', 'rewards.gifts': 'هدايا',

  'recharge.title': 'شحن المحفظة', 'recharge.amount': 'المبلغ', 'recharge.payment': 'الدفع',
  'recharge.submitRecharge': 'إرسال الشحن', 'recharge.success': 'تم إرسال الشحن!',

  'withdraw.title': 'سحب المحفظة', 'withdraw.amount': 'المبلغ', 'withdraw.withdraw': 'سحب',

  'profile.fullName': 'الاسم الكامل', 'profile.email': 'البريد الإلكتروني', 'profile.phone': 'الهاتف',
  'profile.saveChanges': 'حفظ التغييرات', 'profile.language': 'اللغة', 'profile.signOut': 'تسجيل الخروج',

  'wallet.addWallet': 'إضافة محفظة سحب', 'wallet.saveWallet': 'حفظ المحفظة',
};
translations.ar = { ...en, ...ar };

// Japanese
const ja: Dict = {
  'auth.welcomeBack': 'おかえりなさい', 'auth.createAccount': 'アカウントを作成',
  'auth.signInToManage': '投資を管理するにはサインインしてください', 'auth.startEarning': '今日から毎日のリターンを獲得しましょう',
  'auth.signIn': 'サインイン', 'auth.register': '登録', 'auth.fullName': '氏名',
  'auth.phoneNumber': '電話番号', 'auth.referralCode': '紹介コード（任意）',
  'auth.enterReferralCode': '紹介コードを入力', 'auth.email': 'メール', 'auth.password': 'パスワード',
  'auth.pleaseWait': 'お待ちください...', 'auth.createAccountBtn': 'アカウント作成',
  'auth.downloadApp': 'アプリをダウンロード', 'auth.aboutCarziqo': 'Carziqo.Ltdについて',
  'auth.carRentalPlatform': 'カーレンタル収益プラットフォーム',
  'auth.passwordMinLength': 'パスワードは6文字以上必要です',

  'nav.home': 'ホーム', 'nav.store': 'カーストア', 'nav.rentals': 'レンタル', 'nav.rewards': '報酬', 'nav.profile': 'プロフィール', 'nav.welcome': 'ようこそ',

  'dash.availableBalance': '利用可能残高', 'dash.recharge': 'チャージ', 'dash.withdraw': '出金',
  'dash.totalEarnings': '総利益', 'dash.activeRentals': 'アクティブなレンタル',
  'dash.featuredCars': '注目の車', 'dash.recentTransactions': '最近の取引',
  'dash.noTransactions': '取引履歴なし', 'dash.free': '無料', 'dash.from': 'から', 'dash.days': '日', 'dash.perDay': '/日',

  'status.pending': '保留中', 'status.approved': '承認済み', 'status.rejected': '却下',
  'status.active': 'アクティブ', 'status.completed': '完了', 'status.cancelled': 'キャンセル', 'status.paused': '一時停止',

  'store.title': 'カーストア', 'store.invest': '投資する', 'store.processing': '処理中...',
  'store.investmentConfirmed': '投資が確認されました！',

  'rentals.title': 'マイレンタル', 'rentals.active': 'アクティブ', 'rentals.completed': '完了',
  'rentals.totalEarned': '総獲得額', 'rentals.noRentals': 'レンタルが見つかりません',

  'rewards.title': '報酬センター', 'rewards.checkin': 'チェックイン', 'rewards.coupons': 'クーポン', 'rewards.gifts': 'ギフト',

  'recharge.title': 'ウォレットをチャージ', 'recharge.amount': '金額', 'recharge.payment': '支払い',
  'recharge.submitRecharge': 'チャージを送信', 'recharge.success': 'チャージが送信されました！',

  'withdraw.title': 'ウォレットを出金', 'withdraw.amount': '金額', 'withdraw.withdraw': '出金',

  'profile.fullName': '氏名', 'profile.email': 'メール', 'profile.phone': '電話',
  'profile.saveChanges': '変更を保存', 'profile.language': '言語', 'profile.signOut': 'サインアウト',

  'wallet.addWallet': '出金ウォレットを追加', 'wallet.saveWallet': 'ウォレットを保存',
};
translations.ja = { ...en, ...ja };

// Korean
const ko: Dict = {
  'auth.welcomeBack': '다시 오신 것을 환영합니다', 'auth.createAccount': '계정 만들기',
  'auth.signInToManage': '투자를 관리하려면 로그인하세요', 'auth.startEarning': '오늘 일일 수익을 시작하세요',
  'auth.signIn': '로그인', 'auth.register': '회원가입', 'auth.fullName': '전체 이름',
  'auth.phoneNumber': '전화번호', 'auth.referralCode': '추천 코드 (선택)',
  'auth.enterReferralCode': '추천 코드 입력', 'auth.email': '이메일', 'auth.password': '비밀번호',
  'auth.pleaseWait': '잠시만 기다려주세요...', 'auth.createAccountBtn': '계정 만들기',
  'auth.downloadApp': '앱 다운로드', 'auth.aboutCarziqo': 'Carziqo.Ltd 소개',
  'auth.carRentalPlatform': '차량 렌탈 수익 플랫폼',
  'auth.passwordMinLength': '비밀번호는 최소 6자 이상이어야 합니다',

  'nav.home': '홈', 'nav.store': '차량 스토어', 'nav.rentals': '렌탈', 'nav.rewards': '보상', 'nav.profile': '프로필', 'nav.welcome': '환영합니다',

  'dash.availableBalance': '사용 가능 잔액', 'dash.recharge': '충전', 'dash.withdraw': '출금',
  'dash.totalEarnings': '총 수익', 'dash.activeRentals': '활성 렌탈',
  'dash.featuredCars': '추천 차량', 'dash.recentTransactions': '최근 거래',
  'dash.noTransactions': '거래 내역 없음', 'dash.free': '무료', 'dash.from': '부터', 'dash.days': '일', 'dash.perDay': '/일',

  'status.pending': '대기 중', 'status.approved': '승인됨', 'status.rejected': '거부됨',
  'status.active': '활성', 'status.completed': '완료', 'status.cancelled': '취소됨', 'status.paused': '일시정지',

  'store.title': '차량 스토어', 'store.invest': '투자', 'store.processing': '처리 중...',
  'store.investmentConfirmed': '투자 확인됨!',

  'rentals.title': '내 렌탈', 'rentals.active': '활성', 'rentals.completed': '완료',
  'rentals.totalEarned': '총 수익', 'rentals.noRentals': '렌탈을 찾을 수 없습니다',

  'rewards.title': '보상 센터', 'rewards.checkin': '체크인', 'rewards.coupons': '쿠폰', 'rewards.gifts': '선물',

  'recharge.title': '지갑 충전', 'recharge.amount': '금액', 'recharge.payment': '결제',
  'recharge.submitRecharge': '충전 제출', 'recharge.success': '충전 제출됨!',

  'withdraw.title': '지갑 출금', 'withdraw.amount': '금액', 'withdraw.withdraw': '출금',

  'profile.fullName': '전체 이름', 'profile.email': '이메일', 'profile.phone': '전화',
  'profile.saveChanges': '변경 사항 저장', 'profile.language': '언어', 'profile.signOut': '로그아웃',

  'wallet.addWallet': '출금 지갑 추가', 'wallet.saveWallet': '지갑 저장',
};
translations.ko = { ...en, ...ko };

// Russian
const ru: Dict = {
  'auth.welcomeBack': 'С возвращением', 'auth.createAccount': 'Создайте аккаунт',
  'auth.signInToManage': 'Войдите для управления инвестициями', 'auth.startEarning': 'Начните зарабатывать ежедневный доход сегодня',
  'auth.signIn': 'Войти', 'auth.register': 'Регистрация', 'auth.fullName': 'Полное имя',
  'auth.phoneNumber': 'Номер телефона', 'auth.referralCode': 'Реферальный код (необязательно)',
  'auth.enterReferralCode': 'Введите реферальный код', 'auth.email': 'Эл. почта', 'auth.password': 'Пароль',
  'auth.pleaseWait': 'Пожалуйста, подождите...', 'auth.createAccountBtn': 'Создать аккаунт',
  'auth.downloadApp': 'Скачать приложение', 'auth.aboutCarziqo': 'О Carziqo.Ltd',
  'auth.carRentalPlatform': 'Платформа аренды автомобилей',
  'auth.passwordMinLength': 'Пароль должен содержать не менее 6 символов',

  'nav.home': 'Главная', 'nav.store': 'Магазин авто', 'nav.rentals': 'Аренда', 'nav.rewards': 'Награды', 'nav.profile': 'Профиль', 'nav.welcome': 'Добро пожаловать',

  'dash.availableBalance': 'Доступный баланс', 'dash.recharge': 'Пополнить', 'dash.withdraw': 'Вывести',
  'dash.totalEarnings': 'Всего заработано', 'dash.activeRentals': 'Активная аренда',
  'dash.featuredCars': 'Рекомендуемые авто', 'dash.recentTransactions': 'Недавние транзакции',
  'dash.noTransactions': 'Нет транзакций', 'dash.free': 'БЕСПЛАТНО', 'dash.from': 'От', 'dash.days': 'дн.', 'dash.perDay': '/день',

  'status.pending': 'Ожидание', 'status.approved': 'Одобрено', 'status.rejected': 'Отклонено',
  'status.active': 'Активно', 'status.completed': 'Завершено', 'status.cancelled': 'Отменено', 'status.paused': 'Приостановлено',

  'store.title': 'Магазин авто', 'store.invest': 'Инвестировать', 'store.processing': 'Обработка...',
  'store.investmentConfirmed': 'Инвестиция подтверждена!',

  'rentals.title': 'Моя аренда', 'rentals.active': 'Активно', 'rentals.completed': 'Завершено',
  'rentals.totalEarned': 'Всего заработано', 'rentals.noRentals': 'Аренда не найдена',

  'rewards.title': 'Центр наград', 'rewards.checkin': 'Регистрация', 'rewards.coupons': 'Купоны', 'rewards.gifts': 'Подарки',

  'recharge.title': 'Пополнить кошелёк', 'recharge.amount': 'Сумма', 'recharge.payment': 'Оплата',
  'recharge.submitRecharge': 'Отправить пополнение', 'recharge.success': 'Пополнение отправлено!',

  'withdraw.title': 'Вывести из кошелька', 'withdraw.amount': 'Сумма', 'withdraw.withdraw': 'Вывести',

  'profile.fullName': 'Полное имя', 'profile.email': 'Эл. почта', 'profile.phone': 'Телефон',
  'profile.saveChanges': 'Сохранить изменения', 'profile.language': 'Язык', 'profile.signOut': 'Выйти',

  'wallet.addWallet': 'Добавить кошелёк для вывода', 'wallet.saveWallet': 'Сохранить кошелёк',
};
translations.ru = { ...en, ...ru };

// Indonesian
const id: Dict = {
  'auth.welcomeBack': 'Selamat datang kembali', 'auth.createAccount': 'Buat akun Anda',
  'auth.signInToManage': 'Masuk untuk mengelola investasi Anda', 'auth.startEarning': 'Mulai hasilkan pengembalian harian hari ini',
  'auth.signIn': 'Masuk', 'auth.register': 'Daftar', 'auth.fullName': 'Nama Lengkap',
  'auth.phoneNumber': 'Nomor Telepon', 'auth.referralCode': 'Kode Referal (Opsional)',
  'auth.enterReferralCode': 'Masukkan kode referal', 'auth.email': 'Email', 'auth.password': 'Kata Sandi',
  'auth.pleaseWait': 'Mohon tunggu...', 'auth.createAccountBtn': 'Buat Akun',
  'auth.downloadApp': 'Unduh Aplikasi Kami', 'auth.aboutCarziqo': 'Tentang Carziqo.Ltd',
  'auth.carRentalPlatform': 'Platform Penyewaan Mobil',
  'auth.passwordMinLength': 'Kata sandi minimal 6 karakter',

  'nav.home': 'Beranda', 'nav.store': 'Mobil', 'nav.rentals': 'Sewa', 'nav.rewards': 'Hadiah', 'nav.profile': 'Profil', 'nav.welcome': 'Selamat datang',

  'dash.availableBalance': 'Saldo Tersedia', 'dash.recharge': 'Isi Ulang', 'dash.withdraw': 'Tarik',
  'dash.totalEarnings': 'Total Pendapatan', 'dash.activeRentals': 'Sewa Aktif',
  'dash.featuredCars': 'Mobil Unggulan', 'dash.recentTransactions': 'Transaksi Terbaru',
  'dash.noTransactions': 'Belum ada transaksi', 'dash.free': 'GRATIS', 'dash.from': 'Mulai', 'dash.days': 'hari', 'dash.perDay': '/hari',

  'status.pending': 'Menunggu', 'status.approved': 'Disetujui', 'status.rejected': 'Ditolak',
  'status.active': 'Aktif', 'status.completed': 'Selesai', 'status.cancelled': 'Dibatalkan', 'status.paused': 'Jeda',

  'store.title': 'Toko Mobil', 'store.invest': 'Investasi', 'store.processing': 'Memproses...',
  'store.investmentConfirmed': 'Investasi Dikonfirmasi!',

  'rentals.title': 'Sewa Saya', 'rentals.active': 'Aktif', 'rentals.completed': 'Selesai',
  'rentals.totalEarned': 'Total Diperoleh', 'rentals.noRentals': 'Tidak ada sewa ditemukan',

  'rewards.title': 'Pusat Hadiah', 'rewards.checkin': 'Check-in', 'rewards.coupons': 'Kupon', 'rewards.gifts': 'Hadiah',

  'recharge.title': 'Isi Dompet', 'recharge.amount': 'Jumlah', 'recharge.payment': 'Pembayaran',
  'recharge.submitRecharge': 'Kirim Isi Ulang', 'recharge.success': 'Isi Ulang Dikirim!',

  'withdraw.title': 'Tarik Dompet', 'withdraw.amount': 'Jumlah', 'withdraw.withdraw': 'Tarik',

  'profile.fullName': 'Nama Lengkap', 'profile.email': 'Email', 'profile.phone': 'Telepon',
  'profile.saveChanges': 'Simpan Perubahan', 'profile.language': 'Bahasa', 'profile.signOut': 'Keluar',

  'wallet.addWallet': 'Tambah Dompet Penarikan', 'wallet.saveWallet': 'Simpan Dompet',
};
translations.id = { ...en, ...id };

// Vietnamese
const vi: Dict = {
  'auth.welcomeBack': 'Chào mừng trở lại', 'auth.createAccount': 'Tạo tài khoản',
  'auth.signInToManage': 'Đăng nhập để quản lý khoản đầu tư', 'auth.startEarning': 'Bắt đầu kiếm lợi nhuận hàng ngày hôm nay',
  'auth.signIn': 'Đăng nhập', 'auth.register': 'Đăng ký', 'auth.fullName': 'Họ và Tên',
  'auth.phoneNumber': 'Số điện thoại', 'auth.referralCode': 'Mã giới thiệu (Tùy chọn)',
  'auth.enterReferralCode': 'Nhập mã giới thiệu', 'auth.email': 'Email', 'auth.password': 'Mật khẩu',
  'auth.pleaseWait': 'Vui lòng đợi...', 'auth.createAccountBtn': 'Tạo tài khoản',
  'auth.downloadApp': 'Tải ứng dụng', 'auth.aboutCarziqo': 'Về Carziqo.Ltd',
  'auth.carRentalPlatform': 'Nền tảng cho thuê xe',
  'auth.passwordMinLength': 'Mật khẩu phải có ít nhất 6 ký tự',

  'nav.home': 'Trang chủ', 'nav.store': 'Cửa hàng xe', 'nav.rentals': 'Thuê', 'nav.rewards': 'Phần thưởng', 'nav.profile': 'Hồ sơ', 'nav.welcome': 'Chào mừng',

  'dash.availableBalance': 'Số dư khả dụng', 'dash.recharge': 'Nạp tiền', 'dash.withdraw': 'Rút tiền',
  'dash.totalEarnings': 'Tổng thu nhập', 'dash.activeRentals': 'Thuê đang hoạt động',
  'dash.featuredCars': 'Xe nổi bật', 'dash.recentTransactions': 'Giao dịch gần đây',
  'dash.noTransactions': 'Chưa có giao dịch', 'dash.free': 'MIỄN PHÍ', 'dash.from': 'Từ', 'dash.days': 'ngày', 'dash.perDay': '/ngày',

  'status.pending': 'Đang chờ', 'status.approved': 'Đã duyệt', 'status.rejected': 'Từ chối',
  'status.active': 'Hoạt động', 'status.completed': 'Hoàn thành', 'status.cancelled': 'Đã hủy', 'status.paused': 'Tạm dừng',

  'store.title': 'Cửa hàng xe', 'store.invest': 'Đầu tư', 'store.processing': 'Đang xử lý...',
  'store.investmentConfirmed': 'Đầu tư đã xác nhận!',

  'rentals.title': 'Thuê của tôi', 'rentals.active': 'Hoạt động', 'rentals.completed': 'Hoàn thành',
  'rentals.totalEarned': 'Tổng kiếm được', 'rentals.noRentals': 'Không tìm thấy thuê nào',

  'rewards.title': 'Trung tâm phần thưởng', 'rewards.checkin': 'Điểm danh', 'rewards.coupons': 'Mã giảm giá', 'rewards.gifts': 'Quà tặng',

  'recharge.title': 'Nạp ví', 'recharge.amount': 'Số tiền', 'recharge.payment': 'Thanh toán',
  'recharge.submitRecharge': 'Gửi nạp tiền', 'recharge.success': 'Đã gửi nạp tiền!',

  'withdraw.title': 'Rút ví', 'withdraw.amount': 'Số tiền', 'withdraw.withdraw': 'Rút tiền',

  'profile.fullName': 'Họ và Tên', 'profile.email': 'Email', 'profile.phone': 'Điện thoại',
  'profile.saveChanges': 'Lưu thay đổi', 'profile.language': 'Ngôn ngữ', 'profile.signOut': 'Đăng xuất',

  'wallet.addWallet': 'Thêm ví rút tiền', 'wallet.saveWallet': 'Lưu ví',
};
translations.vi = { ...en, ...vi };

// Thai
const th: Dict = {
  'auth.welcomeBack': 'ยินดีต้อนรับกลับ', 'auth.createAccount': 'สร้างบัญชีของคุณ',
  'auth.signInToManage': 'เข้าสู่ระบบเพื่อจัดการการลงทุน', 'auth.startEarning': 'เริ่มรับผลตอบแทนรายวันวันนี้',
  'auth.signIn': 'เข้าสู่ระบบ', 'auth.register': 'ลงทะเบียน', 'auth.fullName': 'ชื่อเต็ม',
  'auth.phoneNumber': 'หมายเลขโทรศัพท์', 'auth.referralCode': 'รหัสแนะนำ (ไม่บังคับ)',
  'auth.enterReferralCode': 'ป้อนรหัสแนะนำ', 'auth.email': 'อีเมล', 'auth.password': 'รหัสผ่าน',
  'auth.pleaseWait': 'กรุณารอ...', 'auth.createAccountBtn': 'สร้างบัญชี',
  'auth.downloadApp': 'ดาวน์โหลดแอป', 'auth.aboutCarziqo': 'เกี่ยวกับ Carziqo.Ltd',
  'auth.carRentalPlatform': 'แพลตฟอร์มเช่ารถยนต์',
  'auth.passwordMinLength': 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร',

  'nav.home': 'หน้าแรก', 'nav.store': 'รถ', 'nav.rentals': 'เช่า', 'nav.rewards': 'รางวัล', 'nav.profile': 'โปรไฟล์', 'nav.welcome': 'ยินดีต้อนรับ',

  'dash.availableBalance': 'ยอดคงเหลือที่ใช้ได้', 'dash.recharge': 'เติมเงิน', 'dash.withdraw': 'ถอน',
  'dash.totalEarnings': 'รายได้รวม', 'dash.activeRentals': 'การเช่าที่ใช้งานอยู่',
  'dash.featuredCars': 'รถแนะนำ', 'dash.recentTransactions': 'ธุรกรรมล่าสุด',
  'dash.noTransactions': 'ยังไม่มีธุรกรรม', 'dash.free': 'ฟรี', 'dash.from': 'จาก', 'dash.days': 'วัน', 'dash.perDay': '/วัน',

  'status.pending': 'รอดำเนินการ', 'status.approved': 'อนุมัติ', 'status.rejected': 'ปฏิเสธ',
  'status.active': 'ใช้งานอยู่', 'status.completed': 'เสร็จสิ้น', 'status.cancelled': 'ยกเลิก', 'status.paused': 'หยุดชั่วคราว',

  'store.title': 'ร้านรถ', 'store.invest': 'ลงทุน', 'store.processing': 'กำลังประมวลผล...',
  'store.investmentConfirmed': 'ยืนยันการลงทุนแล้ว!',

  'rentals.title': 'การเช่าของฉัน', 'rentals.active': 'ใช้งานอยู่', 'rentals.completed': 'เสร็จสิ้น',
  'rentals.totalEarned': 'รวมที่ได้รับ', 'rentals.noRentals': 'ไม่พบการเช่า',

  'rewards.title': 'ศูนย์รางวัล', 'rewards.checkin': 'เช็คอิน', 'rewards.coupons': 'คูปอง', 'rewards.gifts': 'ของขวัญ',

  'recharge.title': 'เติมเงินกระเป๋า', 'recharge.amount': 'จำนวน', 'recharge.payment': 'การชำระเงิน',
  'recharge.submitRecharge': 'ส่งการเติมเงิน', 'recharge.success': 'ส่งการเติมเงินแล้ว!',

  'withdraw.title': 'ถอนกระเป๋า', 'withdraw.amount': 'จำนวน', 'withdraw.withdraw': 'ถอน',

  'profile.fullName': 'ชื่อเต็ม', 'profile.email': 'อีเมล', 'profile.phone': 'โทรศัพท์',
  'profile.saveChanges': 'บันทึกการเปลี่ยนแปลง', 'profile.language': 'ภาษา', 'profile.signOut': 'ออกจากระบบ',

  'wallet.addWallet': 'เพิ่มกระเป๋าถอน', 'wallet.saveWallet': 'บันทึกกระเป๋า',
};
translations.th = { ...en, ...th };

// Malay
const ms: Dict = {
  'auth.welcomeBack': 'Selamat datang kembali', 'auth.createAccount': 'Cipta akaun anda',
  'auth.signInToManage': 'Log masuk untuk menguruskan pelaburan anda', 'auth.startEarning': 'Mula menjana pulangan harian hari ini',
  'auth.signIn': 'Log masuk', 'auth.register': 'Daftar', 'auth.fullName': 'Nama Penuh',
  'auth.phoneNumber': 'Nombor Telefon', 'auth.referralCode': 'Kod Rujukan (Pilihan)',
  'auth.enterReferralCode': 'Masukkan kod rujukan', 'auth.email': 'Emel', 'auth.password': 'Kata laluan',
  'auth.pleaseWait': 'Sila tunggu...', 'auth.createAccountBtn': 'Cipta Akaun',
  'auth.downloadApp': 'Muat Turun Aplikasi Kami', 'auth.aboutCarziqo': 'Mengenai Carziqo.Ltd',
  'auth.carRentalPlatform': 'Platform Sewa Kereta',
  'auth.passwordMinLength': 'Kata laluan mestilah sekurang-kurangnya 6 aksara',

  'nav.home': 'Utama', 'nav.store': 'Kedai Kereta', 'nav.rentals': 'Sewa', 'nav.rewards': 'Ganjaran', 'nav.profile': 'Profil', 'nav.welcome': 'Selamat datang',

  'dash.availableBalance': 'Baki Tersedia', 'dash.recharge': 'Tambah Nilai', 'dash.withdraw': 'Pengeluaran',
  'dash.totalEarnings': 'Jumlah Pendapatan', 'dash.activeRentals': 'Sewa Aktif',
  'dash.featuredCars': 'Kereta Pilihan', 'dash.recentTransactions': 'Transaksi Terkini',
  'dash.noTransactions': 'Tiada transaksi lagi', 'dash.free': 'PERCUMA', 'dash.from': 'Dari', 'dash.days': 'hari', 'dash.perDay': '/hari',

  'status.pending': 'Menunggu', 'status.approved': 'Diluluskan', 'status.rejected': 'Ditolak',
  'status.active': 'Aktif', 'status.completed': 'Selesai', 'status.cancelled': 'Dibatalkan', 'status.paused': 'Dijeda',

  'store.title': 'Kedai Kereta', 'store.invest': 'Melabur', 'store.processing': 'Memproses...',
  'store.investmentConfirmed': 'Pelaburan Disahkan!',

  'rentals.title': 'Sewa Saya', 'rentals.active': 'Aktif', 'rentals.completed': 'Selesai',
  'rentals.totalEarned': 'Jumlah Diperoleh', 'rentals.noRentals': 'Tiada sewa dijumpai',

  'rewards.title': 'Pusat Ganjaran', 'rewards.checkin': 'Daftar masuk', 'rewards.coupons': 'Kupon', 'rewards.gifts': 'Hadiah',

  'recharge.title': 'Tambah Nilai Dompet', 'recharge.amount': 'Jumlah', 'recharge.payment': 'Pembayaran',
  'recharge.submitRecharge': 'Hantar Tambah Nilai', 'recharge.success': 'Tambah Nilai Dihantar!',

  'withdraw.title': 'Pengeluaran Dompet', 'withdraw.amount': 'Jumlah', 'withdraw.withdraw': 'Pengeluaran',

  'profile.fullName': 'Nama Penuh', 'profile.email': 'Emel', 'profile.phone': 'Telefon',
  'profile.saveChanges': 'Simpan Perubahan', 'profile.language': 'Bahasa', 'profile.signOut': 'Log keluar',

  'wallet.addWallet': 'Tambah Dompet Pengeluaran', 'wallet.saveWallet': 'Simpan Dompet',
};
translations.ms = { ...en, ...ms };

// Turkish
const tr: Dict = {
  'auth.welcomeBack': 'Tekrar hoş geldiniz', 'auth.createAccount': 'Hesabınızı oluşturun',
  'auth.signInToManage': 'Yatırımlarınızı yönetmek için giriş yapın', 'auth.startEarning': 'Bugün günlük getiriler kazanmaya başlayın',
  'auth.signIn': 'Giriş yap', 'auth.register': 'Kayıt ol', 'auth.fullName': 'Ad Soyad',
  'auth.phoneNumber': 'Telefon Numarası', 'auth.referralCode': 'Davet Kodu (İsteğe bağlı)',
  'auth.enterReferralCode': 'Davet kodunu girin', 'auth.email': 'E-posta', 'auth.password': 'Şifre',
  'auth.pleaseWait': 'Lütfen bekleyin...', 'auth.createAccountBtn': 'Hesap Oluştur',
  'auth.downloadApp': 'Uygulamamızı İndirin', 'auth.aboutCarziqo': 'Carziqo.Ltd Hakkında',
  'auth.carRentalPlatform': 'Araç Kiralama Kazanç Platformu',
  'auth.passwordMinLength': 'Şifre en az 6 karakter olmalıdır',

  'nav.home': 'Ana Sayfa', 'nav.store': 'Araç Mağazası', 'nav.rentals': 'Kiralananlar', 'nav.rewards': 'Ödüller', 'nav.profile': 'Profil', 'nav.welcome': 'Hoş geldiniz',

  'dash.availableBalance': 'Kullanılabilir Bakiye', 'dash.recharge': 'Yükle', 'dash.withdraw': 'Çek',
  'dash.totalEarnings': 'Toplam Kazanç', 'dash.activeRentals': 'Aktif Kiralamalar',
  'dash.featuredCars': 'Öne Çıkan Araçlar', 'dash.recentTransactions': 'Son İşlemler',
  'dash.noTransactions': 'Henüz işlem yok', 'dash.free': 'ÜCRETSİZ', 'dash.from': 'Başlangıç', 'dash.days': 'gün', 'dash.perDay': '/gün',

  'status.pending': 'Beklemede', 'status.approved': 'Onaylandı', 'status.rejected': 'Reddedildi',
  'status.active': 'Aktif', 'status.completed': 'Tamamlandı', 'status.cancelled': 'İptal edildi', 'status.paused': 'Duraklatıldı',

  'store.title': 'Araç Mağazası', 'store.invest': 'Yatır', 'store.processing': 'İşleniyor...',
  'store.investmentConfirmed': 'Yatırım Onaylandı!',

  'rentals.title': 'Kiralananlarım', 'rentals.active': 'Aktif', 'rentals.completed': 'Tamamlandı',
  'rentals.totalEarned': 'Toplam Kazanç', 'rentals.noRentals': 'Kiralama bulunamadı',

  'rewards.title': 'Ödül Merkezi', 'rewards.checkin': 'Giriş', 'rewards.coupons': 'Kuponlar', 'rewards.gifts': 'Hediyeler',

  'recharge.title': 'Cüzdan Yükle', 'recharge.amount': 'Tutar', 'recharge.payment': 'Ödeme',
  'recharge.submitRecharge': 'Yükleme Gönder', 'recharge.success': 'Yükleme Gönderildi!',

  'withdraw.title': 'Cüzdan Çek', 'withdraw.amount': 'Tutar', 'withdraw.withdraw': 'Çek',

  'profile.fullName': 'Ad Soyad', 'profile.email': 'E-posta', 'profile.phone': 'Telefon',
  'profile.saveChanges': 'Değişiklikleri Kaydet', 'profile.language': 'Dil', 'profile.signOut': 'Çıkış yap',

  'wallet.addWallet': 'Çekim Cüzdanı Ekle', 'wallet.saveWallet': 'Cüzdanı Kaydet',
};
translations.tr = { ...en, ...tr };

// Italian
const it: Dict = {
  'auth.welcomeBack': 'Bentornato', 'auth.createAccount': 'Crea il tuo account',
  'auth.signInToManage': 'Accedi per gestire i tuoi investimenti', 'auth.startEarning': 'Inizia a guadagnare rendimenti giornalieri oggi',
  'auth.signIn': 'Accedi', 'auth.register': 'Registrati', 'auth.fullName': 'Nome completo',
  'auth.phoneNumber': 'Numero di telefono', 'auth.referralCode': 'Codice di riferimento (Opzionale)',
  'auth.enterReferralCode': 'Inserisci il codice di riferimento', 'auth.email': 'Email', 'auth.password': 'Password',
  'auth.pleaseWait': 'Attendere prego...', 'auth.createAccountBtn': 'Crea account',
  'auth.downloadApp': 'Scarica la nostra app', 'auth.aboutCarziqo': 'Informazioni su Carziqo.Ltd',
  'auth.carRentalPlatform': 'Piattaforma di noleggio auto',
  'auth.passwordMinLength': 'La password deve avere almeno 6 caratteri',

  'nav.home': 'Home', 'nav.store': 'Auto', 'nav.rentals': 'Noleggi', 'nav.rewards': 'Premi', 'nav.profile': 'Profilo', 'nav.welcome': 'Benvenuto',

  'dash.availableBalance': 'Saldo disponibile', 'dash.recharge': 'Ricarica', 'dash.withdraw': 'Preleva',
  'dash.totalEarnings': 'Guadagni totali', 'dash.activeRentals': 'Noleggi attivi',
  'dash.featuredCars': 'Auto in evidenza', 'dash.recentTransactions': 'Transazioni recenti',
  'dash.noTransactions': 'Nessuna transazione', 'dash.free': 'GRATIS', 'dash.from': 'Da', 'dash.days': 'giorni', 'dash.perDay': '/giorno',

  'status.pending': 'In attesa', 'status.approved': 'Approvato', 'status.rejected': 'Rifiutato',
  'status.active': 'Attivo', 'status.completed': 'Completato', 'status.cancelled': 'Annullato', 'status.paused': 'In pausa',

  'store.title': 'Negozio auto', 'store.invest': 'Investi', 'store.processing': 'Elaborazione...',
  'store.investmentConfirmed': 'Investimento confermato!',

  'rentals.title': 'I miei noleggi', 'rentals.active': 'Attivo', 'rentals.completed': 'Completato',
  'rentals.totalEarned': 'Totale guadagnato', 'rentals.noRentals': 'Nessun noleggio trovato',

  'rewards.title': 'Centro premi', 'rewards.checkin': 'Check-in', 'rewards.coupons': 'Coupon', 'rewards.gifts': 'Regali',

  'recharge.title': 'Ricarica portafoglio', 'recharge.amount': 'Importo', 'recharge.payment': 'Pagamento',
  'recharge.submitRecharge': 'Invia ricarica', 'recharge.success': 'Ricarica inviata!',

  'withdraw.title': 'Preleva portafoglio', 'withdraw.amount': 'Importo', 'withdraw.withdraw': 'Preleva',

  'profile.fullName': 'Nome completo', 'profile.email': 'Email', 'profile.phone': 'Telefono',
  'profile.saveChanges': 'Salva modifiche', 'profile.language': 'Lingua', 'profile.signOut': 'Esci',

  'wallet.addWallet': 'Aggiungi portafoglio di prelievo', 'wallet.saveWallet': 'Salva portafoglio',
};
translations.it = { ...en, ...it };

// Dutch
const nl: Dict = {
  'auth.welcomeBack': 'Welkom terug', 'auth.createAccount': 'Maak je account',
  'auth.signInToManage': 'Log in om je investeringen te beheren', 'auth.startEarning': 'Begin vandaag met dagelijkse opbrengsten verdienen',
  'auth.signIn': 'Inloggen', 'auth.register': 'Registreren', 'auth.fullName': 'Volledige naam',
  'auth.phoneNumber': 'Telefoonnummer', 'auth.referralCode': 'Verwijscode (Optioneel)',
  'auth.enterReferralCode': 'Voer verwijscode in', 'auth.email': 'E-mail', 'auth.password': 'Wachtwoord',
  'auth.pleaseWait': 'Even geduld...', 'auth.createAccountBtn': 'Account aanmaken',
  'auth.downloadApp': 'Download onze app', 'auth.aboutCarziqo': 'Over Carziqo.Ltd',
  'auth.carRentalPlatform': 'Autoverhuur verdienplatform',
  'auth.passwordMinLength': 'Wachtwoord moet minstens 6 tekens bevatten',

  'nav.home': 'Home', 'nav.store': 'Auto\'s', 'nav.rentals': 'Huur', 'nav.rewards': 'Beloningen', 'nav.profile': 'Profiel', 'nav.welcome': 'Welkom',

  'dash.availableBalance': 'Beschikbaar saldo', 'dash.recharge': 'Opwaarderen', 'dash.withdraw': 'Opnemen',
  'dash.totalEarnings': 'Totale winst', 'dash.activeRentals': 'Actieve verhuringen',
  'dash.featuredCars': 'Aanbevolen auto\'s', 'dash.recentTransactions': 'Recente transacties',
  'dash.noTransactions': 'Nog geen transacties', 'dash.free': 'GRATIS', 'dash.from': 'Vanaf', 'dash.days': 'dagen', 'dash.perDay': '/dag',

  'status.pending': 'In afwachting', 'status.approved': 'Goedgekeurd', 'status.rejected': 'Afgewezen',
  'status.active': 'Actief', 'status.completed': 'Voltooid', 'status.cancelled': 'Geannuleerd', 'status.paused': 'Gepauzeerd',

  'store.title': 'Autowinkel', 'store.invest': 'Investeren', 'store.processing': 'Verwerken...',
  'store.investmentConfirmed': 'Investering bevestigd!',

  'rentals.title': 'Mijn verhuringen', 'rentals.active': 'Actief', 'rentals.completed': 'Voltooid',
  'rentals.totalEarned': 'Totaal verdiend', 'rentals.noRentals': 'Geen verhuringen gevonden',

  'rewards.title': 'Beloningscentrum', 'rewards.checkin': 'Inchecken', 'rewards.coupons': 'Bonnen', 'rewards.gifts': 'Cadeaus',

  'recharge.title': 'Portemonnee opwaarderen', 'recharge.amount': 'Bedrag', 'recharge.payment': 'Betaling',
  'recharge.submitRecharge': 'Opwaardering verzenden', 'recharge.success': 'Opwaardering verzonden!',

  'withdraw.title': 'Portemonnee opnemen', 'withdraw.amount': 'Bedrag', 'withdraw.withdraw': 'Opnemen',

  'profile.fullName': 'Volledige naam', 'profile.email': 'E-mail', 'profile.phone': 'Telefoon',
  'profile.saveChanges': 'Wijzigingen opslaan', 'profile.language': 'Taal', 'profile.signOut': 'Uitloggen',

  'wallet.addWallet': 'Opnameportemonnee toevoegen', 'wallet.saveWallet': 'Portemonnee opslaan',
};
translations.nl = { ...en, ...nl };

// German
const de: Dict = {
  'auth.welcomeBack': 'Willkommen zurück', 'auth.createAccount': 'Konto erstellen',
  'auth.signInToManage': 'Anmelden um Ihre Investitionen zu verwalten', 'auth.startEarning': 'Beginnen Sie heute mit täglichen Renditen',
  'auth.signIn': 'Anmelden', 'auth.register': 'Registrieren', 'auth.fullName': 'Vollständiger Name',
  'auth.phoneNumber': 'Telefonnummer', 'auth.referralCode': 'Empfehlungscode (Optional)',
  'auth.enterReferralCode': 'Empfehlungscode eingeben', 'auth.email': 'E-Mail', 'auth.password': 'Passwort',
  'auth.pleaseWait': 'Bitte warten...', 'auth.createAccountBtn': 'Konto erstellen',
  'auth.downloadApp': 'App herunterladen', 'auth.aboutCarziqo': 'Über Carziqo.Ltd',
  'auth.carRentalPlatform': 'Autovermietungs-Plattform',
  'auth.passwordMinLength': 'Passwort muss mindestens 6 Zeichen lang sein',

  'nav.home': 'Start', 'nav.store': 'Autos', 'nav.rentals': 'Mieten', 'nav.rewards': 'Belohnungen', 'nav.profile': 'Profil', 'nav.welcome': 'Willkommen',

  'dash.availableBalance': 'Verfügbares Guthaben', 'dash.recharge': 'Aufladen', 'dash.withdraw': 'Abheben',
  'dash.totalEarnings': 'Gesamtgewinn', 'dash.activeRentals': 'Aktive Mieten',
  'dash.featuredCars': 'Empfohlene Autos', 'dash.recentTransactions': 'Letzte Transaktionen',
  'dash.noTransactions': 'Noch keine Transaktionen', 'dash.free': 'KOSTENLOS', 'dash.from': 'Ab', 'dash.days': 'Tage', 'dash.perDay': '/Tag',

  'status.pending': 'Ausstehend', 'status.approved': 'Genehmigt', 'status.rejected': 'Abgelehnt',
  'status.active': 'Aktiv', 'status.completed': 'Abgeschlossen', 'status.cancelled': 'Storniert', 'status.paused': 'Pausiert',

  'store.title': 'Auto-Shop', 'store.invest': 'Investieren', 'store.processing': 'Verarbeitung...',
  'store.investmentConfirmed': 'Investition bestätigt!',

  'rentals.title': 'Meine Mieten', 'rentals.active': 'Aktiv', 'rentals.completed': 'Abgeschlossen',
  'rentals.totalEarned': 'Gesamt verdient', 'rentals.noRentals': 'Keine Mieten gefunden',

  'rewards.title': 'Belohnungscenter', 'rewards.checkin': 'Check-in', 'rewards.coupons': 'Gutscheine', 'rewards.gifts': 'Geschenke',

  'recharge.title': 'Geldbörse aufladen', 'recharge.amount': 'Betrag', 'recharge.payment': 'Zahlung',
  'recharge.submitRecharge': 'Aufladung senden', 'recharge.success': 'Aufladung gesendet!',

  'withdraw.title': 'Geldbörse abheben', 'withdraw.amount': 'Betrag', 'withdraw.withdraw': 'Abheben',

  'profile.fullName': 'Vollständiger Name', 'profile.email': 'E-Mail', 'profile.phone': 'Telefon',
  'profile.saveChanges': 'Änderungen speichern', 'profile.language': 'Sprache', 'profile.signOut': 'Abmelden',

  'wallet.addWallet': 'Abhebe-Geldbörse hinzufügen', 'wallet.saveWallet': 'Geldbörse speichern',
};
translations.de = { ...en, ...de };

export function translate(lang: LangCode, key: string, params?: Record<string, string | number>): string {
  const dict = translations[lang] || translations.en;
  let str = dict[key] ?? translations.en[key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      str = str.replace(`{${k}}`, String(v));
    }
  }
  return str;
}
