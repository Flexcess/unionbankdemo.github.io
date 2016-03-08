 $(function(){
            $('.nav-grid-icon .columns').click(function(){
                var map = {
                            'Personal': ['Accounts', 'Retail Loans', 'Online Payments', 'Digital Banking', 'Cards', 'Insurance & Investment', 'Other Service', 'TVC'],
                            'NRI': ['NRI Deposit', 'NRI Investments', 'NRI Remittances', 'NRI Loans', 'NRI FAQs'],
                            'International': ['Exports', 'Imports', 'Remittances', 'Network', 'Other Services', 'Treasury', 'FAQs'],
                            'Rural & Agri': ['Short Term Credit', 'Long Term Credit', 'Other Credit', 'CSR', 'Useful Information', 'RRB', 'Minority Welfare'],
                            'Corporate' : ['Deposit Accounts', 'Credit', 'Loan Syndication & Advisory', 'Selected Treasury Products', 'Government Business', 'Other Services', 'Useful Information', 'FAQs'],
                            'MSME': ['MSME Overview', 'MSME Policy', 'Credit', 'Schemes', 'Channel Finance', 'Special Scheme', 'Other Services', 'MSME Contact Points', 'Mudra', 'TVC'],
                            'Financial Inclusion': ['Model For FI', 'Products for FI', 'Projects Undertaken', 'Schemes Implemented', 'CSR', 'Useful Information', 'PJMDY', 'PMJJBY', 'PSMBY', 'Bank MITRA'],
                            'About Us': ['Profile', 'Joint Venture', 'Investor Relations', 'Policies & Codes', 'Training System', 'Careers', 'KYC', 'Risk Management', 'CSR', 'MISC'],
                            'Govt. Business': ['Departmentalized Ministries Accounts', 'Government Savings Schemes', 'Tax Collection', 'Pension', 'Fund Management Solution'],
                            'Investor Relations': ['Disclosures to Stock Exchange(s)', 'Shareholders Information', 'Financial Results', 'Annual Reports', 'Half Yearly Communicaions', 
                                                   'General Meetings', 'Key Managerial Personnel', 'Investor Grievence Mechanism'],
                            },
                    l2_map = {
                        'Personal_Accounts': {'Current Accounts': 'personal/RegularCurrentAccount.html',
                                              'Savings Accounts': 'personal/RegularSavingAccounts.html', 
                                              'Salary Accounts': 'personal/UnionSuperSalaryAccount.html', 
                                              'Recurring Deposit Scheme': 'personal/OrdinaryCumulativeDeposit.html',
                                              'Fixed Deposit Accounts': 'personal/FDAccounts.html',
                                              'Demat Accounts': 'personal/DematAccounts.html',
                                              'Online Trading Accounts': 'personal/OnlineTradingAccounts.html',
                                              'Useful Information': 'personal/Usefulinfo.html'},
                                               
                         'Personal_Alternate Channel': {'ATMs': '',
                                                        'Internet Banking':'',
                                                        'Mobile Banking': '',
                                                        'SMS Banking': '',
                                                        'Kisan ATM': ''},                      
                         'Personal_Cards': {'Credit Cards': '',
                                            'Debit Cards': '',
                                             'Gift Cards': '',
                                             'Payroll Cards': '',
                                             'Point of Sale terminal': ''},
                                                                   
                         'Personal_Govt. Business': {'Direct Taxes': '',
                                                     'Indirect Taxes': '',
                                                     'State Tax Collections': '',
                                                     'New Pension Scheme 2009': '',
                                                     'Govt. Deposit Scheme': '',
                                                     'Pension': '',
                                                     'Govt. Bonds': '',
                                                     'Departmentalised Ministries Account': ''},
                                                         
                         'Personal_Insurance & Investment': {'Mutual Fund': 'MutualFunds.html',
                                                             'Life Insurance': 'LifeInsurance.html',
                                                             'General Insurance': 'NonLifeInsurance.html',
                                                             'Union Demat': 'DematAccounts.html',
                                                             'Online Trading Account': 'OnlineTradingAccounts.html',
                                                             'ASBA Applications': 'ASBA.html',
                                                             'Tax Saving Deposits': 'personal/PMSBY.html'},
                                                                                   
                         'Personal_Online Payments': {'Union Bill Pay': '',
                                                      'Bill Pay Online': '',
                                                      'NEFT': '',
                                                      'RTGS': '',
                                                      'Online Tax Payment': '',
                                                      'Donations': '',
                                                      'E-Ticketing KIOSK': '',
                                                      'Online DGFT Payment': ''},
                                                                            
                         'Personal_Other Service': {'Other Service': '',
                                                    'Collection Of Cheques': '',
                                                    'Multi City Cheque Book': '',
                                                    'Call Center 24*7': ''},
                                                                          
                         'Personal_Retail Loans': {'Home Loans': '',
                                                   'Vehicle Loans': '',
                                                   'Education Loan': '',
                                                   'Loans Against Property': '',
                                                   'Loans for Senior Citizens': '',
                                                   'Personal Loan': '',
                                                   'Loans for Medical Practitioners': '',
                                                   'Loans For Pensioners': '',
                                                   'Loans For Salary A/C Holders': '',
                                                   'Tools': ''},
                                                   
                          'NRI_NRI Deposit': {'Feature of NRI Deposits': '',
                                              'Savings Account': '',
                                              'Current Account': '',
                                              'Fixed Deposit[Rupees]': '',
                                              'Fixed Deposit[Foreign Currency]': ''},                                               
                          'NRI_NRI Investments': {'Acquisition of Properties': '',
                                              'Portfolio Investment': '',
                                              'Non Resident Ordinary Account (NRO)': '',
                                              'Gold Coins': ''},
                           'NRI_NRI Remittances': {'Union E-REMIT': '',
                                               'Correspondent Banks': '',
                                               'Tie Up with Exchange Houses': '',
                                               'Union Bill Pay': '',
                                               'Tax Payment': '',
                                               'Union Bullet[RTGS]': ''},
                           'NRI_NRI Loans': {'Home Loans': '',
                                             'Foreign Currency Loan': '',
                                             'NRI FAQs': ''},
                           'INTERNATIONAL_Exports': {'Preshipment Finance': '',
                                                     'Postshipment Finance': '',
                                                     'Non-Fund Based Finance': '',
                                                     'Others': '',
                                                     'Online DGFT Payment': ''},
                          'INTERNATIONAL_Imports': {'Non-Fund Based Finance': '',
                                                     'Fund Based Finance': ''},
                          'INTERNATIONAL_Remittances': {'SWIFT': '',
                                                        'E-REMIT': '',
                                                        'Rupee Drawing Arrangement': ''},                    
                          'INTERNATIONAL_Network': {'Authorised Dealing Branches': '',
                                                    'Correspondent Banks': '',
                                                    'Overseas Branches': ''},
                          'INTERNATIONAL_Other Services': {'Foreign Currency Loans': '',
                                                           'Exchange Rate Feed Over Reuters': '',
                                                           'Online DGFT Payment': '',
                                                           'ECGC Cover': ''},
                          'INTERNATIONAL_Treasury': {'State of Art': '',
                                                     'Infrastructure': '',
                                                     'Products & Services': '',
                                                     'Gold': ''}                                                                                                                                                                         
                    },
                    parent = $(this).find('span').data('group'),
                    val = map[parent],
                    catL2 = {};
                    $('.nav-grid-icon').hide("slide", { direction: "up" }, 500);
                    setTimeout(function(){
                        var links = '<ul id="catL2" class="list-style-none margin-left margin-right">';
                        val.forEach(function(val, index){
                            console.log(val);
                            links += '<li class="margin-bottom-none border"><h3 class="margin-left-s"><span class="inline-block font-l" style="width:85%">' + val + '</span><span class="u-pull-right"><img class="icon margin-right-s" src="images/icons/personal_100.png" alt=""><img class="caret-right margin-left margin-right" src="images/icons/caret_right_100.png" alt=""></span></h3>'
                                           +'<p></p>'
                                      +'</li>';
                        });
                        links += '</ul>';
                        $('.content').append(links);
                        $('#catL2').accordion({
                            active: false,
                            collapsible: true,
                            autoHeight: false,
                            navigation: true, 
                             beforeActivate: function( event, ui ) {
                                 if( $(ui.newPanel).is(':empty')){
                                    catL2 = l2_map[parent + '_' + ui.newHeader.text()];
                                    var content = '';
                                    for(var catL3 in catL2){
                                        console.log(catL3);
                                        var gapClass = catL3 == Object.keys(catL2)[Object.keys(catL2).length - 1] ? 
                                                    '' : 'margin-bottom bgap-xl border-bottom margin-top-l ';
                                        content += '<div class="' + gapClass +'font-xxl"><a class="text-black" href="' + catL2[catL3] + '">' + catL3 + '</a></div>';
                                    }
                                    $(ui.newPanel).append(content);
                                 }
                             }
                        });
                        $('.back-btn').text(parent + ' / Back').removeClass('hide')
                    }, 500);            
    });
    
    $('.back-btn').click(function(){
        var $btn = $(this);
        
        $('#catL2').animate({ marginLeft: "-1000px", opacity: 0 }, 500, function(){
            $(this).remove();
            $btn.addClass('hide');
            $('.nav-grid-icon').show("slide", { direction: "up" }, 500);
        });
    });
    
    $(document).on('click', '#catL2 h3', function (e) {
        $(this).find('.caret-right').toggleClass('rotated-icon');
    }); 
});