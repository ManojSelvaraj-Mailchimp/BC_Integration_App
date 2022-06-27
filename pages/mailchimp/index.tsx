import { Button, Dropdown, Panel, Small, Link as StyledLink, Table, TableSortDirection } from '@bigcommerce/big-design';
import { MoreHorizIcon } from '@bigcommerce/big-design-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import ErrorMessage from '../../components/error';
import Loading from '../../components/loading';
import { TableItem } from '../../types';

function MailchimpInfo() {
    return (
      <div className="MailchimpInfo" style={{ marginTop: "25px" }}>
        <iframe src="https://ls-us.mailchimpapp.com/signup" width="1300px" height="1000px" frameBorder= "0" > </iframe>
      </div>
    );
  }
  
export default MailchimpInfo;
